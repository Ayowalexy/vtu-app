import React from "react";
import $ from 'jquery'
import withRouter from "../../components/withRouter/withRouter";


class NotificationDetails extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        $('.loader-screen').fadeOut('slow');

        
    }
    render() {
        return(
        <div>
            <div class="row no-gutters vh-100 loader-screen">
            <div class="col align-self-center text-white text-center">
                <img src="img/logo.png" alt="logo" />
                <h1 class="mt-3"><span class="font-weight-light ">Fi</span>mobile</h1>
                <p class="text-mute text-uppercase small">Mobile Template</p>
                <div class="laoderhorizontal">
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
                        <a onClick={() => {
                            this.props.navigate('/notification')
                        }} class="btn  btn-link text-dark"><i class="material-icons">navigate_before</i></a>
                    </div>
                    <div class="col text-center"><img src="img/logo-header.png" alt="" class="header-logo" /></div>
                    <div class="col-auto">
                        <a href="profile.html" class="btn  btn-link text-dark"><i class="material-icons">account_circle</i></a>
                    </div>
                </div>
            </div>
    
            <div class="container">
                <div class="card bg-template shadow mt-4 h-190">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-auto">
                                <figure class="avatar avatar-60"><img src="img/user3.png" alt="" /></figure>
                            </div>
                            <div class="col pl-0 align-self-center">
                                <h5 class="mb-1">John Jakson </h5>
                                <p class="text-mute ">Work, London, UK <small class="float-right text-mute">3 days ago</small></p>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container top-100">
                <div class="card mb-4 shadow">
                    <div class="card-body">
                        <h5 class="mb-3"><small>Accepted your request</small></h5>
                        <p class="text-secondary text-mute">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus.onec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus.onec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus.onec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus.onec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus.</p>
                    </div>
                </div>
            </div>
    
            <div class="footer">
                <div class="no-gutters">
                    <div class="col-auto mx-auto">
                        <div class="row no-gutters justify-content-center">
                            <div class="col-auto">
                                <a href="index.html" class="btn btn-link-default ">
                                    <i class="material-icons">home</i>
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="statistics.html" class="btn btn-link-default">
                                    <i class="material-icons">insert_chart_outline</i>
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="wallet.html" class="btn btn-link-default">
                                    <i class="material-icons">account_balance_wallet</i>
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="transactions.html" class="btn btn-link-default">
                                    <i class="material-icons">widgets</i>
                                </a>
                            </div>
                            <div class="col-auto">
                                <a href="profile.html" class="btn btn-link-default">
                                    <i class="material-icons">account_circle</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )}
    
} 
export default withRouter(NotificationDetails)