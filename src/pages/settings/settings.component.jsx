import React from "react";
import $ from 'jquery'
import Footer from "../../components/footer/footer";
import SideBar from "../../components/SideBar/sidebar.component";
import { Link } from "react-router-dom";


class Settings extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    
    componentDidMount(){
        $('.loader-screen').fadeOut('slow');

        
    }

    hamburgerMenu () {
        $('.menu-btn').on('click', function (e) {
            e.stopPropagation();
            if ($('body').hasClass('sidemenu-open') == true) {
                $('body, html').removeClass('sidemenu-open');
                setTimeout(function () {
                    $('body, html').removeClass('menuactive');
                }, 500);
            } else {
                $('body, html').addClass('sidemenu-open menuactive');
            }
        });
    }

    handleClose () {
        $('.wrapper, .closesidemenu').on('click', function () {

            if ($('body').hasClass('sidemenu-open') == true) {
    
                $('body, html').removeClass('sidemenu-open');
                setTimeout(function () {
                    $('body, html').removeClass('menuactive');
                }, 500);
            }
        });
    }

    render(){
        return (
            <div className='deeppurple-theme'>
                    <div className="row no-gutters vh-100 loader-screen">
                        <div className="col align-self-center text-white text-center">
                            <img src="img/logo.png" alt="logo" />
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
                    
                    <SideBar />
                    <a class="closesidemenu" onClick={this.handleClose}><i class="material-icons icons-raised bg-dark ">close</i></a>
                    <div class="wrapper homepage">
                        <div class="header">
                            <div class="row no-gutters">
                                <div class="col-auto">
                                    <button onClick={this.hamburgerMenu} class="btn  btn-link text-dark menu-btn"><i class="material-icons">menu</i><span class="new-notification"></span></button>
                                </div>
                                <div class="col text-center"><img src="img/logo-header.png" alt="" class="header-logo"/></div>
                                <div class="col-auto">
                                    <Link to='/notification-details' href="notification.html" class="btn  btn-link text-dark position-relative"><i class="material-icons">notifications_none</i><span class="counts">9+</span></Link>
                                </div>
                            </div>
                        </div>


                            
        <div class="container">            
            <div class="row mt-3">
                <div class="col-12 px-0">
                    <ul class="list-group list-group-flush mb-4">
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col">
                                    <h6 class="text-dark mb-1">Email Notification</h6>
                                    <p class="text-secondary mb-0 small">Default all notification will be sent</p>
                                </div>
                                <div class="col-2 pl-0 align-self-center text-right">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch1" checked />
                                        <label class="custom-control-label" for="customSwitch1"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col">
                                    <h6 class="text-dark mb-1">SMS Notification</h6>
                                    <p class="text-secondary mb-0 small">Receive SMS notification</p>
                                </div>
                                <div class="col-2 pl-0 align-self-center text-right">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch4" checked />
                                        <label class="custom-control-label" for="customSwitch4"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col">
                                    <h6 class="text-dark mb-1">Profile Avaialability</h6>
                                    <p class="text-secondary mb-0 small">Everyone can see my profile in search</p>
                                </div>
                                <div class="col-2 pl-0 align-self-center text-right">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                                        <label class="custom-control-label" for="customSwitch2"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col">
                                    <h6 class="text-dark mb-1">Sent Request</h6>
                                    <p class="text-secondary mb-0 small">Everyone can sent me a request</p>
                                </div>
                                <div class="col-2 pl-0 align-self-center text-right">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch3"/>
                                        <label class="custom-control-label" for="customSwitch3"></label>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <a href="change-password.html" class="row">
                                <div class="col">
                                    <h6 class="text-dark mb-1">Change password</h6>
                                    <p class="text-secondary mb-0 small">You must need your verified email</p>
                                </div>                                
                                <div class="col-2 pl-0 align-self-center text-right">
                                     <i class="material-icons text-secondary">chevron_right</i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <Footer />
                        </div>
                    </div>
        )
    }
}


export default Settings