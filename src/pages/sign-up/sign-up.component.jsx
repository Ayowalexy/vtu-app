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
import Logo from '../../assets/img/vtu-logo.png'
import { setEmail } from '../../redux/actions/user.actions'



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
        const {navigate, dispatch} = this.props
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
            dispatch(setEmail(this.state.email_address))
            navigate('/verify')
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
                    <a class="btn  btn-link text-dark"><i class="material-icons">chevron_left</i></a>
                </div>
                <div class="col text-center"></div>
                <div class="col-auto">
                </div>
            </div>
        </div>

        <div class="row no-gutters login-row">
            <div class="col align-self-center px-3 text-center">
                <br />
                <img src="data:image/png;base64,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" alt="logo" class="logo-small" /> 
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