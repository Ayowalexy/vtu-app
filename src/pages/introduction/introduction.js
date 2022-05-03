import React from 'react'
import $ from 'jquery'
import Img1 from '../../assets/img/information_1.png'
import Img2 from '../../assets/img/infomarmation-graphics2.png'
import Img3 from '../../assets/img/infomarmation-graphics3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import withRouter from '../../components/withRouter/withRouter'

import { Pagination } from "swiper";


class Introduction extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        $('.loader-screen').fadeOut('slow');
    }

    render() {
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

            <div class="wrapper">
        <div class="swiper-container introduction pt-5">
            <div class="swiper-wrapper">

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div class="swiper-slide overflow-hidden text-center">
                            <div class="row no-gutters">
                                <div class="col align-self-center px-3">
                                    <img src={Img1}/>
                                    <div class="row">
                                        <div class="container mb-5">
                                            <h4>Amazing Finance Corner</h4>
                                            <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="swiper-slide overflow-hidden text-center">
                            <div class="row no-gutters">
                                <div class="col align-self-center px-3">
                                <img src={Img2}/>
                                    <div class="row">
                                        <div class="container mb-5">
                                            <h4>Cross all over the world</h4>
                                            <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="swiper-slide overflow-hidden text-center">
                            <div class="row no-gutters">
                                <div class="col align-self-center px-3">
                                <img src={Img3}/>
                                    <div class="row">
                                        <div class="container mb-5">
                                            <h4>Experience ease of use</h4>
                                            <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Sndisse conv allis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>   
            </div>
            <div class="swiper-pagination"></div>
        </div>
       
        <div class="row mx-0 bottom-button-container">
            <div class="col">
                <a onClick={() => {
                    this.props.navigate('/login')
                }} class="btn btn-default btn-lg btn-rounded shadow btn-block">Login</a>
            </div>
            <div class="col">
                <a 
                    onClick={() => {
                        this.props.navigate('/sign-up')
                    }}
                class="btn btn-white bg-white btn-lg btn-rounded shadow btn-block">Register</a>
            </div>
        </div>
    </div>
        </div>
        )
    }
}

export default withRouter(Introduction)