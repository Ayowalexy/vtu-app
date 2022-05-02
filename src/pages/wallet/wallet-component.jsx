import React from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import SideBar from '../../components/SideBar/sidebar.component';
import withRouter from '../../components/withRouter/withRouter';

class Wallet extends React.Component {
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
                                <a  class="btn  btn-link text-dark position-relative"><i class="material-icons">notifications_none</i><span class="counts">9+</span></a>
                            </div>
                        </div>
                    </div>
    
                    <div class="container">
                        <div class="row mt-4">
                            <div class="col">
                                <h3 class="mb-0 font-weight-normal">${
                                    this.props.user.currentUser.balance
                                }</h3>
                                <p class="text-mute text-secondary">My Balance</p>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-default btn-rounded-54 shadow" data-toggle="modal" data-target="#addmoney"><i class="material-icons">add</i></button>
                            </div>
                        </div>
                    </div>


                    <div class="swiper-container card-slide mb-2">
            <div class="swiper-wrapper">
                <div class="swiper-slide pb-4">
                    <div class="container z-1 position-relative">
                        <div class="card bg-template shadow mt-4 h-200">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <img src="img/visa-logos.png" alt="" />
                                        <p class="small text-mute mt-2">Debit Card</p>
                                    </div>
                                    <div class="col-12 mt-5">
                                        <h3 class="font-weight-normal">**** **** **** 9858</h3>
                                    </div>
                                    <div class="col-12">
                                        <p>{
                                                this.props.user.currentUser.first_name}<span class="float-right">11/20</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container top-50 z-0">
                        <div class="card mb-4 shadow pt-5">
                            <div class="card-body border-bottom">
                                <div class="row">
                                    <div class="col">
                                        <p>EMI<br /><small class="text-mute text-secondary">Car Loan</small></p>
                                    </div>
                                    <div class="col text-right">
                                        <p>$ 658.00<br /><small class="text-mute text-secondary">Paid: 18-12-2019</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body border-bottom">
                                <div class="row">
                                    <div class="col">
                                        <p>EMI<br /><small class="text-mute text-secondary">Car Loan</small></p>
                                    </div>
                                    <div class="col text-right">
                                        <p>$ 658.00<br /><small class="text-mute text-secondary">Paid: 18-12-2019</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-none">
                                <button class="btn btn-default shadow  btn-rounded btn-block btn-lg ">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide pb-4">
                    <div class="container z-1 position-relative">
                        <div class="card gradient-success  text-white shadow mt-4 h-200">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <img src="img/visa-logos.png" alt="" />
                                        <p class="small text-mute mt-2">Debit Card</p>
                                    </div>
                                    <div class="col-12 mt-5">
                                        <h3 class="font-weight-normal">**** **** **** 9858</h3>
                                    </div>
                                    <div class="col-12">
                                        <p>{this.props.user.currentUser.first_name} <span class="float-right">11/20</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container top-50 z-0">
                        <div class="card mb-4 shadow pt-5">
                            <div class="card-body border-bottom">
                                <div class="row">
                                    <div class="col">
                                        <p>EMI<br /><small class="text-mute text-secondary">Car Loan</small></p>
                                    </div>
                                    <div class="col text-right">
                                        <p>$ 658.00<br /><small class="text-mute text-secondary">Paid: 18-12-2019</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body border-bottom">
                                <div class="row">
                                    <div class="col">
                                        <p>EMI<br /><small class="text-mute text-secondary">Car Loan</small></p>
                                    </div>
                                    <div class="col text-right">
                                        <p>$ 658.00<br /><small class="text-mute text-secondary">Paid: 18-12-2019</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-none">
                                <button class="btn btn-default shadow  btn-rounded btn-block btn-lg ">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide pb-4">
                    <div class="container z-1 position-relative">
                        <div class="card gradient-danger text-white shadow mt-4 h-200">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <img src="img/visa-logos.png" alt="" />
                                        <p class="small text-mute mt-2">Debit Card</p>
                                    </div>
                                    <div class="col-12 mt-5">
                                        <h3 class="font-weight-normal">**** **** **** 9858</h3>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            {
                                                this.props.user.currentUser.first_name
                                            }
                                            <span class="float-right">11/20</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container top-50 z-0">
                        <div class="card mb-4 shadow pt-5">
                            <div class="card-body border-bottom">
                                <div class="row">
                                    <div class="col">
                                        <p>EMI<br /><small class="text-mute text-secondary">Car Loan</small></p>
                                    </div>
                                    <div class="col text-right">
                                        <p>$ 658.00<br /><small class="text-mute text-secondary">Paid: 18-12-2019</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body border-bottom">
                                <div class="row">
                                    <div class="col">
                                        <p>EMI<br /><small class="text-mute text-secondary">Car Loan</small></p>
                                    </div>
                                    <div class="col text-right">
                                        <p>$ 658.00<br /><small class="text-mute text-secondary">Paid: 18-12-2019</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-none">
                                <button class="btn btn-default shadow  btn-rounded btn-block btn-lg ">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>


            <Footer />
                    </div>



            
       
      
        </div>
        )
    }
}

export default withRouter(Wallet)