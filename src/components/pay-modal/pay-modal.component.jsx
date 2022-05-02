import React from 'react'


const PayModal = () => (
    <div class="modal fade" id="paymodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5>Airtime</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
                        <label class="custom-control-label" for="customRadioInline1">To Bill</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" checked />
                        <label class="custom-control-label" for="customRadioInline2">To Person</label>
                    </div>

                    <div class="form-group mt-4">
                        <select class="form-control text-center">
                            <option>Mrs. Magon Johnson</option>
                            <option selected>Ms. Shivani Dilux</option>
                        </select>
                    </div>

                    <div class="card shadow border-0 mb-3">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto pr-0">
                                    <div class="avatar avatar-60 no-shadow border-0">
                                        <img src="img/user2.png" alt="" />
                                    </div>
                                </div>
                                <div class="col align-self-center">
                                    <h6 class="font-weight-normal mb-1">Ms. Shivani Dilux</h6>
                                    <p class="text-mute small text-secondary">London, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-center mt-4">
                        <input type="text" class="form-control form-control-lg text-center" placeholder="Enter amount" required="" autofocus="" />
                    </div>
                    <p class="text-mute text-center">You will be redirected to payment gatway to procceed further. Enter amount in USD.</p>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-default btn-lg btn-rounded shadow btn-block close"  data-dismiss="modal">Next</button>
                </div>
            </div>
        </div>
    </div>
)

export default PayModal