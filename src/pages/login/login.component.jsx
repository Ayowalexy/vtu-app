import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getuserProfile, login, signUp } from '../../services/network'
import $ from 'jquery'
import withRouter from '../../components/withRouter/withRouter'
import NotificationModal from '../../components/notification/notification'
import { HandleNotification } from '../../utils/utils'
import { setCurrentUser } from '../../redux/actions/user.actions'


class Login extends React.Component {
    constructor (){
        super();
        this.state = {
            email_address: '',
            password:'',
            message: {
                header: '',
                text: ''
            },
            loading: false,
        }

    }

    componentDidMount(){
        $('.loader-screen').fadeOut('slow');

    }
    handlePress () {
        this.props.history.push('/index')
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        const data = {
            username: this.state.email_address,
            password: this.state.password
        }
        this.setState({
            loading: true
        })
        try {
            const res = await login(data)
            if(res.data.flag === 1){
                const profile = await getuserProfile({
                    id: res.data.token
                })

                this.props.dispatch(setCurrentUser(profile.data.customer))
                this.props.navigate(`/index/${res?.data?.token}`)
            } else {
                this.setState({
                    message: {
                        header: "Sorry",
                        text: res.data.message
                    },
                    loading: false
                })
                this.props.navigate('/login')
                HandleNotification()
            }
    
        }catch (e){
            this.setState({
                message: {
                    header: "Something went wrong",
                    text: "Please, try again"
                },
                loading: false
            })
            HandleNotification()

            console.log(e)
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
                <div className="row no-gutters vh-100 loader-screen">
                    <div className="col align-self-center text-white text-center">
                        <img src="img/logo.png" alt="logo"  />
                        <h1 className="mt-3"><span className="font-weight-light ">Fi</span>mobile</h1>
                        <p className="text-mute text-uppercase small">Mobile Template</p>
                        <div className="laoderhorizontal">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>


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
                   

                    <div class="row mx-0 bottom-button-container" style={{
                        position: "absolute",
                        top: (window.innerHeight) - (window.innerHeight / 2)
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
        <NotificationModal message={this.state.message}/>

        
    </div>
               </div>
        )
    }
       
  
}

export default withRouter(Login)