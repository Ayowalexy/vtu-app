import React, { useState } from 'react'
import './verify.styles.css'
import { useSelector } from 'react-redux';
import OtpInput from 'react-otp-input';
import { userToken } from '../../services/network';
import { HandleNotification } from '../../utils/utils';
import NotificationModal from '../../components/notification/notification';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const email = useSelector(state => state.user.email)
    const [message, setMessage] = useState({header: "Sorry", text: "Error, Invalid email and token or token have expired"})


    const navigate = useNavigate();
    const handleChange = (otp) => setOtp(otp);

    const handleToken = async () => {
        if(otp.length < 6){
            return
        }
        setLoading(true)
        const data = {
            email: email,
            token: otp,
        }
        const res = await userToken(data)
        console.log(res)
        if(res.data.flag){
            navigate('/login')
        } else {
            setMessage({
                header: 'Sorry',
                text: res?.data?.message
            })
            setLoading(false)
            HandleNotification();
        }
    }

    return (
        <div className='container'>
           <div className="row">
            <div className='col-lg-3'></div>
                <div className='col-sm-12 col-lg-7 inner_verify'>
                        <div className="inner_verify">
                            <div className="address_name">
                                    Verify you email address
                            </div>
                            <div className="verify_body">
                                Your email ({email}) has not been verified yet. 
                                In order to start using your account, you need to
                                enter the OTP sent to your email.

                                
                            </div>

                            <div className="otp-input">
                                <OtpInput
                                    value={otp}
                                    isInputNum={false}
                                    shouldAutoFocus={true}
                                    onChange={handleChange}
                                    numInputs={6}
                                    focusStyle={{
                                        borderColor: 'blue',
                                        borderStyle: "solid",
                                        borderWidth: '2px'
                                    }}
                                    inputStyle={{
                                        width: '40px',
                                        height: "40px",
                                        marginLeft: '10px'
                                    }}
                                />
                            </div>
                            <span className="sub_message">
                                    If you did not receive the email, click the button to resend
                                </span>
                                {
                                loading ? 
                                ( 
                                    <button disabled className='btn btn-primary resend_email'>
                                        <div class="spinner-border text-light" style={{width: '20px', height: '20px', color: "white"}} role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </button>
                                    ): 
                                    <button onClick={handleToken} className='btn btn-primary resend_email'>Verify</button> 
                            }

                            <button className='btn btn-primary resend_email'>
                                Resend Email
                            </button>

                            {/* <div className="sign_out">
                                Sign Out
                            </div> */}
                        </div>
                    </div>
                <div className='col-lg-2'></div>
                <NotificationModal message={message} />
           </div>
           
        </div>
    )
}

export default Verify