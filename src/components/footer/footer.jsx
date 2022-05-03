import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = ({props}) => {
    const user = useSelector(state => state.user)
    return(
    
    <div class="footer">
    <div class="no-gutters">
        <div class="col-auto mx-auto">
            <div class="row no-gutters justify-content-center">
                <div class="col-auto">
                <Link to={`/index/${user.currentUser.token}`} class="btn btn-link-default active">
                    <i class="material-icons">home</i>
                    </Link>
                    
                </div>
                
                <div class="col-auto">
                    <Link to='/wallet' class="btn btn-link-default">
                            <i class="material-icons">account_balance_wallet</i>
                    </Link>
                    
                </div>
                
                <div class="col-auto">
                <Link to='/profile' class="btn btn-link-default">
                    <i class="material-icons">account_circle</i>
                </Link>
                    
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Footer