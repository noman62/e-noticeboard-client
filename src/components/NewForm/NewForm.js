import React from 'react';

const NewForm = () => {
    return (
        <div>
            <div class="pt-4">
                    <h2>New Upload Notice</h2>
                    <hr/>
                    <form class="upload-form">
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="notice-number"><b><big>Notice No</big></b> </label>
                              </div>
                              <div class="form-group col-md-8">
                                <input type="text" class="form-control form-control-sm" id="notice-number" required placeholder="Type Notice No"/>
                              </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="notice-title"><b><big>Notice Title</big></b></label>
                              </div>
                              <div class="form-group col-md-8">
                                <input type="text" class="form-control form-control-sm" id="notice-title" placeholder="Type The Main Title of Notice" required/>
                              </div>
                             
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="bulletin-title"><b><big>Bulletin Title</big></b></label>
                            </div>
                            <div class="form-group col-md-8">
                                <input type="text" class="form-control form-control-sm" id="bulletin-title" required placeholder="Type a bulletin Title"/>
                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputBatch"><big><b>Batch</b></big></label>
                            </div>
                            <div class="form-group col-md-8">
                                <select id="inputBatch" class="form-control form-control-sm">
                                  <option selected>Choose...</option>
                                  <option>ALL BATCH</option>
                                  <option>ICE 4th BATCH</option>
                                  <option>ICE 5th BATCH</option>
                                  <option>ICE 6th BATCH</option>
                                  <option>ICE 7th BATCH</option>
                                  <option>ICE 8th BATCH</option>
                                  <option>ICE 9th BATCH</option>
                            </select>
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="lastdate"><big><b>Last Date</b></big></label>
                              </div>
                              <div class="form-group col-md-8">
                                <input class="form-control form-control-sm" type="date" name="" id=""/>
                              </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="upcoming-event"><big><b>Upcoming Event Title</b></big></label>
                              </div>
                              <div class="form-group col-md-8">
                                <input class="form-control form-control-sm" id="upcoming-event" placeholder='Type The Upcoming Event Title'/>
                              </div>
                             
                         
                          </div> 
                          <div class="form-row">
                              <div class="form-group col-md-3">
                                <label for="image"><big><b>Upload Image</b></big></label>
                              </div>
                              <div class="form-group col-md-8">
                                <input type="file" class="form-control form-control-sm" id="Image"/>
                              </div>
                          </div>
                       
                        <div class="form-row">
                            <div class="form-group col-md-12 text-center">
                                <button type="submit" class="btn btn-primary w-50">Upload Notice </button>
                            </div>
                        </div>
                        
                      </form>
                </div>
        </div>
    );
};

export default NewForm;