import React from 'react'
import NavigateComponent from '../../components/nav/navigateComponent'
import '../../features/editProfilePage/editProfile.css'
function EditProfile() {
    return (
        <div>
            <NavigateComponent />
            <div className="container_page">
                <div class="row">
                    <div class="col-md-5" id="left_info">
                        <img className="image1" src="https://i.pinimg.com/originals/08/8b/65/088b65345010c4c01a49cb467f656b75.jpg" />
                    </div>
                    <div class="col-md-7">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Profile Information</h4>
                            </div>
                            <div class="row mt-2" id="input_block">
                                <div class="col-md-2">
                                    <label class="labels">Fullname</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="row mt-2" id="input_block">
                                <div class="col-md-2">
                                    <label class="labels">Email</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="email" />
                                </div>
                            </div>
                            <div class="row mt-2" id="input_block">
                                <div class="col-md-2">
                                    <label class="labels">Phone</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="row mt-2" id="input_block">
                                <div class="col-md-2">
                                    <label class="labels">Address</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div><button id="btnSave" class="btn btn-primary profile-button" type="button">Save Change</button></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                    </div>
                </div>
            </div>
        </div >
    )
}
export default EditProfile
