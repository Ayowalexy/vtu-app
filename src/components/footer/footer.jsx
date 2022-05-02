import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    
    <div class="footer">
    <div class="no-gutters">
        <div class="col-auto mx-auto">
            <div class="row no-gutters justify-content-center">
                <div class="col-auto">
                <Link to='/index' class="btn btn-link-default active">
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

export default Footer