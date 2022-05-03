import React from "react";
import Footer from "../../components/footer/footer";
import ParentComponent from "../../components/parent-component/parent-component";
import SideBar from "../../components/SideBar/sidebar.component";
import { Link } from "react-router-dom";
import $ from 'jquery'



class History extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

     componentDidMount(){
        $('.loader-screen').fadeOut('slow');
        $('.wrapper, .closesidemenu').on('click', function () {

            if ($('body').hasClass('sidemenu-open') == true) {
    
                $('body, html').removeClass('sidemenu-open');
                setTimeout(function () {
                    $('body, html').removeClass('menuactive');
                }, 500);
            }
        });
        
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
        <div >
        <a class="closesidemenu" onClick={this.handleClose}><i class="material-icons icons-raised bg-dark ">close</i></a>
        </div>
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
<h6 class="subtitle">Transaction History</h6>
<div class="row">
    <div class="col-12 px-0">
        <ul class="list-group list-group-flush border-top border-bottom">
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user2.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Ms. Shivani Dilux</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user4.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mrs. Magon Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user3.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mr. Jack Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-danger">-$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user2.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Ms. Shivani Dilux</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-danger">-$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user4.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mrs. Magon Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user3.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mr. Jack Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user2.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Ms. Shivani Dilux</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user4.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mrs. Magon Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user3.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mr. Jack Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-danger">-$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user2.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Ms. Shivani Dilux</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-danger">-$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user4.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mrs. Magon Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-auto pr-0">
                        <div class="avatar avatar-50 no-shadow border-0">
                            <img src="img/user3.png" alt="" />
                        </div>
                    </div>
                    <div class="col align-self-center pr-0">
                        <h6 class="font-weight-normal mb-1">Mr. Jack Strudio</h6>
                        <p class="text-mute small text-secondary">15-1-2020, 8:00 am</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="text-success">$154.0</h6>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</div>

            <Footer />
        </div>
</div>
        )}
}


export default History