import React, {useEffect} from 'react'
import '../../vendor/swiper/css/swiper.min.css'
import '../../vendor/materializeicon/material-icons.css'
import './style.css'
import { Link } from 'react-router-dom'
import { signUp } from '../../services/network'
import $ from 'jquery'
import withRouter from '../../components/withRouter/withRouter'
import { getuserProfile } from '../../services/network'
import NotificationModal from '../../components/notification/notification'
import { HandleNotification } from '../../utils/utils'
import PreLoader from '../../components/pre-loader/pre-loader'



class SignUp extends React.Component {
    constructor (){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            phone_number: '',
            email_address: '',
            password:'',
            visible: true,
            confirm_password: '123',
            ip_address: '',
            message: {
                header: "",
                text: ''
            },
            loading: false
        }

    }
    

    componentDidMount(){
        this.setState({visible: false})   
        // window.location.reload()
        $('.loader-screen').fadeOut('slow');      
    }
    
    handlePress () {
        this.props.history.push('/index')
    }

    handleSubmit = async event => {
        event.preventDefault()
        console.log(this.state)
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_number: this.state.phone_number,
            email_address: this.state.email_address,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            ip_address: this.state.ip_address
        }
        this.setState({loading: true})
        const res = await signUp(data)
        console.log(res)
        if(res.data.message === 'Account Created Successfully'){
            this.props.navigate('/login')
        } else {

            this.props.navigate('/')
            this.setState({
                message: {
                    header: "Try again",
                    text: res.data.message
                },
                loading: false
            })
            HandleNotification();
        }

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name] : value
        })

    }
    
    render() {
        return (
            <div className='deeppurple-theme'>
                <PreLoader visible={this.state.visible} />

                <div class="wrapper">
        <div class="header">
            <div class="row no-gutters">
                <div class="col-auto">
                    <a href="introduction.html" class="btn  btn-link text-dark"><i class="material-icons">chevron_left</i></a>
                </div>
                <div class="col text-center"></div>
                <div class="col-auto">
                </div>
            </div>
        </div>

        <div class="row no-gutters login-row">
            <div class="col align-self-center px-3 text-center">
                <br />
                <img src="img/logo-login.png" alt="logo" class="logo-small" />
                <form class="form-signin mt-3"  onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <input 
                            type="text" 
                            id="username" 
                            class="form-control form-control-lg text-center" 
                            placeholder="First Name" 
                            required 
                            name='first_name'
                            autofocus
                            value={this.state.first_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <input 
                            type="text" 
                            id="username" 
                            class="form-control form-control-lg text-center" 
                            placeholder="Last Name" 
                            required 
                            name='last_name'
                            autofocus
                            value={this.state.last_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group">

                        <input 
                            type="number" 
                            id="phone" 
                            class="form-control form-control-lg text-center" 
                            placeholder="Phone Number" 
                            required 
                            name='phone_number'
                            value={this.state.phone_number}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <input 
                            type="email" 
                            id="inputEmail" 
                            class="form-control form-control-lg text-center" 
                            placeholder="Email Address" 
                            required 
                            name='email_address'
                            value={this.state.email_address}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <input 
                            type="password" 
                            id="inputPassword" 
                            class="form-control form-control-lg text-center" 
                            placeholder="Password" 
                            required
                            name='password'
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </div>
                    <div class="form-group">
                        <input type="password" id="confirmPassword" class="form-control form-control-lg text-center" placeholder="Confirm Password" required />
                    </div>

                    <p class="mt-4 d-block text-secondary">
                        By clicking register your are agree to the
                        <a>Terms and Condition.</a>
                    </p>

                    <div class="row mx-0 bottom-button-container" style={{
                        // position: "absolute",
                        // top: window.innerHeight - 120
                    }}>
                        <div class="col">
                           {
                               this.state.loading ? 
                               ( 
                                <button class="btn btn-default btn-lg btn-rounded shadow btn-block">
                                    <div class="spinner-border text-light" style={{width: '20px', height: '20px', color: "white"}} role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                                ): 
                                <button type='submit' class="btn btn-default btn-lg btn-rounded shadow btn-block">Next</button> 
                           }
                        
                        </div>
                    </div>

                </form>
            </div>
        </div>
       
                    <NotificationModal message={this.state.message} />
        
    </div>
               </div>
        )
    }
       
  
}

export default withRouter(SignUp)