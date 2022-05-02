import React from "react";
import Footer from "../../components/footer/footer";
import $ from 'jquery'
import SideBar from "../../components/SideBar/sidebar.component";
import { Link } from "react-router-dom";


class Notification extends React.Component{
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

    render() {return (
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
            <div class="row">
                <div class="col-12 px-0">
                    <div class="list-group list-group-flush ">
                        <Link to='/notification-details' class="list-group-item border-top active text-dark" href="notification-details.html">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">local_mall</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">New Order received</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                                </div>

                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top active text-dark" href="notification-details.html">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">account_balance_wallet</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Balance has benn added</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top  text-dark" href="notification-details.html">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">account_circle</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Friend request received</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">New friend request received from Mickey John from Australia</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top text-dark" href="notification-details.html">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">check_circle</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Email Updated</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Your email change request has been successfully updated</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top  text-dark" href="notification-details.html">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">account_balance_wallet</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Balance has benn added</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top new text-dark" href="notification-details.html">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">local_mall</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">New Order received</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                                </div>

                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top  text-dark" href="notification-details.html">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">account_balance_wallet</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Balance has benn added</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top  text-dark" href="#">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">account_circle</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Friend request received</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">New friend request received from Mickey John from Australia</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top text-dark" href="#">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">check_circle</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Email Updated</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Your email change request has been successfully updated</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/notification-details' class="list-group-item border-top  text-dark" href="#">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="material-icons text-template-primary">account_balance_wallet</i>
                                </div>
                                <div class="col pl-0">
                                    <div class="row mb-1">
                                        <div class="col">
                                            <p class="mb-0">Balance has benn added</p>
                                        </div>
                                        <div class="col-auto pl-0">
                                            <p class="small text-mute text-trucated mt-1">2/12/2019</p>
                                        </div>
                                    </div>
                                    <p class="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>
        </div>


                        <Footer />
                    </div>
            </div>
    )}
}


export default Notification