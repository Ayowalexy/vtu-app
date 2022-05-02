import React from "react";


const BookModal = () => (
    <div class="modal fade" id="bookmodal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5>Data</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pt-0">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline12" name="customRadioInline12" class="custom-control-input" />
                    <label class="custom-control-label" for="customRadioInline12">Flight</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline22" name="customRadioInline12" class="custom-control-input" checked />
                    <label class="custom-control-label" for="customRadioInline22">Train</label>
                </div>
                <h6 class="subtitle">Select Location</h6>
                <div class="form-group mt-4">
                    <input type="text" class="form-control text-center" placeholder="Select start point" required="" autofocus="" />
                </div>
                <div class="form-group mt-4">
                    <input type="text" class="form-control text-center" placeholder="Select end point" required="" />
                </div>
                <h6 class="subtitle">Select Date</h6>
                <div class="form-group mt-4">
                    <input type="date" class="form-control text-center" placeholder="Select end point" required="" />
                </div>
                <h6 class="subtitle">number of passangers</h6>
                <div class="form-group mt-4">
                    <select class="form-control  text-center">
                        <option>1</option>
                        <option selected>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>                    
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-default btn-lg btn-rounded shadow btn-block close" data-dismiss="modal">Next</button>
            </div>
        </div>
    </div>
</div>
)


export default BookModal