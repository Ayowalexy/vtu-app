import React from "react";
import $ from 'jquery'
import { Link } from "react-router-dom";
import withRouter from "../withRouter/withRouter";

class SideBar extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    pageRefresh = () => {
        window.location.reload(false)
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

    render (){
        return (
            
            <div className="sidebar">
            <div className="mt-4 mb-3">
                <div className="row">
                    <div className="col-auto">
                        <figure className="avatar avatar-60 border-0"><img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.remove.bg%2Fremove-bg-web%2F5cc729f2c60683544f035949b665ce17223fd2ec%2Fassets%2Fstart_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png&imgrefurl=https%3A%2F%2Fwww.remove.bg%2F&tbnid=qXynBYpZpHkhWM&vet=12ahUKEwislIz6yrT3AhUS0OAKHZDbD2sQMygDegUIARDdAQ..i&docid=4O2GvGuD-Cf09M&w=600&h=400&q=image&ved=2ahUKEwislIz6yrT3AhUS0OAKHZDbD2sQMygDegUIARDdAQ" alt="" /></figure>
                    </div>
                    <div className="col pl-0 align-self-center">
                        <h5 className="mb-1">Ammy Jahnson</h5>
                        <p className="text-mute small">Work, London, UK</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="list-group main-menu">

                        <Link to={`/index/${this.props.user.currentUser.token}`} className="list-group-item list-group-item-action active" onClick={this.handleClose} >
                        <i className="material-icons icons-raised">home</i>Home
                        </Link>
                        <Link className="list-group-item list-group-item-action" onClick={this.handleClose} to='/history'>
                                <i className="material-icons icons-raised">find_in_page</i>History                                <span className="badge badge-dark text-white">2</span>
                        </Link>
                        
                        <Link onClick={this.handleClose} to='/notification' className="list-group-item list-group-item-action">
                            <i className="material-icons icons-raised">notifications</i>Notification 
                                <span className="badge badge-dark text-white">2</span>
                        </Link>

                        <Link onClick={this.handleClose} to='/settings' className="list-group-item list-group-item-action">
                        <i className="material-icons icons-raised">important_devices</i>Settings
                        </Link>
                                                    
                        {/* <a href="controls.html" className="list-group-item list-group-item-action"><i className="material-icons icons-raised">view_quilt<span className="new-notification"></span></i>Pages Controls</a>
                        <a href="setting.html" className="list-group-item list-group-item-action">
                            </a> */}
                        {/* <a  className="list-group-item list-group-item-action" data-toggle="modal" data-target="#colorscheme"><i className="material-icons icons-raised">color_lens</i>Color scheme</a> */}
                        <Link onClick={this.handleClose} to={`/index/${this.props.user.currentUser.token}`} className="list-group-item list-group-item-action">
                        <i className="material-icons icons-raised bg-danger">power_settings_new</i>Logout                    
                            </Link>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(SideBar)