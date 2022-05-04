import React from 'react'
import './success.styles.css'
import { useNavigate } from 'react-router-dom'


const Success = () => {
    const navigation = useNavigate();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-sm-12 col-lg-7 inner_verify">
                    <div className='inner_verify success'>
                        <div className='address_name'>
                            Congrats! You are Verified
                        </div>

                        <div className="sub_message">
                            Thank you for your confirmation
                        </div>

                        <div className="verify_body">
                            You have successfully verified your email account.
                            Now you can login into your account and continue
                            to use our platform
                        </div>

                        <button
                            onClick={() => {
                                navigation('/login')
                            }}
                        className='btn btn-primary resend_email btn-login'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success