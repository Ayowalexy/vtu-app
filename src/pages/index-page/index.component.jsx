import React from 'react';
import $ from 'jquery'

import '../../vendor/swiper/css/swiper.min.css'
import '../../vendor/materializeicon/material-icons.css'
import '../sign-up/style.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import PayModal from '../../components/pay-modal/pay-modal.component';
import SendMoney from '../../components/send-money/send-money.component';
import BookModal from '../../components/book-modal/book.component';
import SideBar from '../../components/SideBar/sidebar.component';
import { HandleNotification } from '../../utils/utils';
import NotificationModal from '../../components/notification/notification';
import PreLoader from '../../components/pre-loader/pre-loader';
import { getuserProfile } from '../../services/network';
import withRouter from '../../components/withRouter/withRouter';
import { setCurrentUser } from '../../redux/actions/user.actions';


class IndexPage extends React.Component {
    constructor(){
        super()
        this.state = {
            active: true,
            visible: true,
            message: {
                header: '',
                text: '',
            },
            currentUser: "" ,
        }
    }

    fetchIndexData = async () => {
        console.log(this.props.params)
        const res = await getuserProfile(this.props.params)
        console.log(res)
        this.props.dispatch(setCurrentUser(res.data.customer))
        if(this.state.active){
            this.setState({
                message: {
                    header: "Login Successful",
                    text: "All your transactions in one place",  
                }                
            })
           
             $('.loader-screen').fadeOut('slow');
            HandleNotification()
        }
    }


    componentDidMount(){
        this.fetchIndexData()    
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
                <PreLoader visible={this.state.visible} />
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
                        <div class="card bg-template shadow mt-4 h-190">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-auto">
                                        <figure class="avatar avatar-60">
                                            <img src={`${this.props.user.currentUser.picture}`} alt=""/>
                                            </figure>
                                    </div>
                                    <div class="col pl-0 align-self-center">
                                        <h5 class="mb-1">
                                            {
                                                this.props.user.currentUser.first_name
                                                .concat(' '+ this.props.user.currentUser.last_name)
                                            }
                                        </h5>
                                        <p class="text-mute small">{
                                            this.props.user.currentUser.email_address
                                            }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container top-100">
                        <div class="card mb-4 shadow">
                            <div class="card-body border-bottom">
                                <div class="row">
                                    <div class="col">
                                        <h3 class="mb-0 font-weight-normal"> ${
                                            this.props.user.currentUser.balance
                                        }</h3>
                                        <p class="text-mute">My Balance</p>
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-default btn-rounded-54 shadow" data-toggle="modal" data-target="#addmoney"><i class="material-icons">add</i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-none">
                                <div class="row">
                                    <div class="col">
                                        <p>71.00 <i class="material-icons text-danger vm small">arrow_downward</i><br/><small class="text-mute">INR</small></p>
                                    </div>
                                    <div class="col text-center">
                                        <p>1.00 <i class="material-icons text-success vm small">arrow_upward</i><br/><small class="text-mute">USD</small></p>
                                    </div>
                                    <div class="col text-right">
                                        <p><i class="material-icons text-success vm small mr-1">arrow_upward</i>0.78<br/><small class="text-mute">GBP</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>




                        <div class="container">
            <div class="row">
                <div class="swiper-container icon-slide mb-4">
                    <div class="swiper-wrapper">
                        <a href="#" class="swiper-slide text-center" data-toggle="modal" data-target="#paymodal">
                            <div class="avatar avatar-60 no-shadow border-0">
                                <div class="overlay bg-template"></div>
                                <i class="material-icons text-template">local_atm</i>
                            </div>
                            <p class="small mt-2">Airtime</p>
                        </a>
                        <a href="#" class="swiper-slide text-center" data-toggle="modal" data-target="#sendmoney">
                            <div class="avatar avatar-60 no-shadow border-0">
                                <div class="overlay bg-template"></div>
                                <i class="material-icons text-template">send</i>
                            </div>
                            <p class="small mt-2">Bills</p>
                        </a>
                        <a href="#" class="swiper-slide text-center" data-toggle="modal" data-target="#bookmodal">
                            <div class="avatar avatar-60 no-shadow border-0">
                                <div class="overlay bg-template"></div>
                                <i class="material-icons text-template">directions_railway</i>
                            </div>
                            <p class="small mt-2">Data</p>
                        </a>
                        <a href="#" class="swiper-slide text-center">
                            <div class="avatar avatar-60 no-shadow border-0">
                                <div class="overlay bg-template"></div>
                                <i class="material-icons text-template">assignment</i>
                            </div>
                            <p class="small mt-2">Bills</p>
                        </a>
                        <a href="#" class="swiper-slide text-center">
                            <div class="avatar avatar-60 no-shadow border-0">
                                <div class="overlay bg-template"></div>
                                <i class="material-icons text-template">camera</i>
                            </div>
                            <p class="small mt-2">Scan</p>
                        </a>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <div class="row mb-2">
                <div class="container px-0">
                    <div class="swiper-container two-slide">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row no-gutters h-100">
                                            <div class="col">
                                                <p>${
                                                this.props.user.currentUser.balance
                                            }       <br/><small class="text-secondary">{
                                            this.props.user.currentUser.phone_number
                                            }</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row no-gutters h-100">
                                            <div class="col">
                                                <p>$ 1548.00<br/><small class="text-secondary">Cash Loan EMI</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row no-gutters h-100">
                                            <div class="col">
                                                <p>$ 1548.00<br/><small class="text-secondary">Car Loan EMI</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row no-gutters h-100">
                                            <div class="col">
                                                <p>$ 1548.00<br/><small class="text-secondary">Business Loan EMI</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row no-gutters h-100">
                                            <div class="col">
                                                <p>$ 1548.00<br/><small class="text-secondary">Edu Loan EMI</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row no-gutters h-100">
                                            <div class="col">
                                                <p>$ 1548.00<br/><small class="text-secondary">Home Loan EMI</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container px-0">
                    <div class="swiper-container offer-slide">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="card shadow border-0 bg-template">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-auto pr-0">
                                                <img src="img/graphics-carousel-scheme1.png" alt="" class="mw-100" />
                                            </div>
                                            <div class="col align-self-center">
                                                <h5 class="mb-2 font-weight-normal">Gold loan scheme</h5>
                                                <p class="text-mute">Get all money at market rate of gold</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="card shadow border-0 bg-template">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col pr-0 align-self-center">
                                                <h5 class="mb-2 font-weight-normal">Gold loan scheme</h5>
                                                <p class="text-mute">Get all money at market rate of gold</p>
                                            </div>
                                            <div class="col-auto">
                                                <img src="img/graphics-carousel-scheme1.png" alt="" class="mw-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        {
            !this.state.renderOnce && (
                <NotificationModal 
                active={this.state.active} 
                message={this.state.message} />
            )
        }
    
      </div>


            
            <div class="modal fade" id="sendmoney" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5>Send Money</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="form-group mt-4">
                        <select class="form-control form-control-lg text-center">
                            <option>Mrs. Magon Johnson</option>
                            <option selected>Ms. Shivani Dilux</option>
                        </select>
                    </div>

                    <div class="card shadow border-0 mb-3">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto pr-0">
                                    <div class="avatar avatar-60 no-shadow border-0">
                                        <img src="img/user2.png" alt=""/>
                                    </div>
                                </div>
                                <div class="col">
                                    <h6 class="font-weight-normal mb-1">Ms. Shivani Dilux</h6>
                                    <p class="text-mute small text-secondary">London, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-center mt-4">
                        <input type="text" class="form-control form-control-lg text-center" placeholder="Enter amount" required="" autofocus="" />
                    </div>
                    <p class="text-mute text-center">You will be redirected to payment gatway to procceed further. Enter amount in USD.</p>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-default btn-lg btn-rounded shadow btn-block close" data-dismiss="modal">Next</button>
                </div>
            </div>
        </div>
    </div>
    
      <PayModal />
      <SendMoney />
      <BookModal />
        </div>
        )
    }
}


export default withRouter(IndexPage)