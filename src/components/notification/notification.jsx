import React, {useRef} from "react";


const NotificationModal = ({active, message}) => {
    return (
        <div class={`notification bg-white shadow-sm border-primary ${active}`}>
        <div class="row">
            <div class="col-auto align-self-center pr-0">
                <i class="material-icons text-primary md-36">fullscreen</i>
            </div>
            <div class="col">
                <h6>{message.header}</h6>
                <p class="mb-0 text-secondary">{message.text}</p>
            </div>
            <div class="col-auto align-self-center pl-0">
                <button class="btn btn-link closenotification"><i class="material-icons text-secondary text-mute md-18 ">close</i></button>
            </div>
        </div>
    </div>
    )
}

export default NotificationModal