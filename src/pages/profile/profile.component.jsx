import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import SideBar from '../../components/SideBar/sidebar.component'
import withRouter from '../../components/withRouter/withRouter'


class Profile extends React.Component {
    constructor(){
        super()
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
                                <a class="btn  btn-link text-dark position-relative"><i class="material-icons">notifications_none</i><span class="counts">9+</span></a>
                            </div>
                        </div>
                    </div>
    
                    


                    <div class="container">
                        <h6 class="subtitle">Friends</h6>
                        <div class="row mb-4">
                            <div class="col-12">
                                <figure class="avatar avatar-50">
                                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.remove.bg%2Fremove-bg-web%2Fa8b5118d623a6b3f4b7813a78c686de384352145%2Fassets%2Fstart_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png&imgrefurl=https%3A%2F%2Fwww.remove.bg%2F&tbnid=qXynBYpZpHkhWM&vet=12ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygDegUIARDfAQ..i&docid=4O2GvGuD-Cf09M&w=600&h=400&q=image&ved=2ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygDegUIARDfAQ" alt="" />
                                </figure>
                                <figure class="avatar avatar-50">
                                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygCegUIARDdAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=image&ved=2ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygCegUIARDdAQ" alt="" />
                                </figure>
                                <figure class="avatar avatar-50">
                                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1453728013993-6d66e9c9123a%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fview&tbnid=n5hAWsQ-sgKo_M&vet=12ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygBegUIARDbAQ..i&docid=-UStXW0dQEx4SM&w=1000&h=667&q=image&ved=2ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygBegUIARDbAQ" alt="" />
                                </figure>
                                <figure class="avatar avatar-50">
                                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb6%2FImage_created_with_a_mobile_phone.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&tbnid=nH5liarSz56duM&vet=12ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygAegUIARDZAQ..i&docid=0JWe7yDOKrVFAM&w=4000&h=3000&q=image&ved=2ahUKEwiHr6nF6bb3AhUmE2MBHaYGA0IQMygAegUIARDZAQ" alt="" />
                                </figure>
                                <div class="avatar avatar-50">
                                    <a class="d-block" href="#">
                                        <h5 class="text-template mb-0">46</h5>
                                        <p class="small d-block text-secondary">More</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <h6 class="subtitle">Contact Information</h6>
                        <dl class="row mb-4">
                            <dt class="col-3 text-secondary font-weight-normal">Email</dt>
                            <dd class="col-9">{this.props.user.currentUser.email_address}</dd>
                            <dt class="col-3 text-secondary font-weight-normal">Phone</dt>
                            <dd class="col-9">{this.props.user.currentUser.phone_number}</dd>
                        </dl>

                        <h6 class="subtitle">Address</h6>
                        <p class="mb-4">58, Lajpat Nagar,<br />
                            Holand Street four,<br />
                            Sydney - 25468<br />
                            Australia
                        </p>

                        <a href="profile-edit.html" class="btn btn-lg btn-default btn-block btn-rounded shadow"><span>Edit Profile</span></a>
                        <br />
                    </div>

                    <Footer />
                    </div>



            
       
      
        </div>
        )
    }
}


export default withRouter(Profile)