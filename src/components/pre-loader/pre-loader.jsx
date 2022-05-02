import React from "react";

const PreLoader = ({visible}) => {
    return (
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

    )
}

export default PreLoader