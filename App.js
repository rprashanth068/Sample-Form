import React, { Component } from 'react';
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="container myform">
        <h5 className="contact-header">Contact</h5>
        <div className="contact-toolbar">
          <span><i class="far fa-save"></i></span>
          &nbsp;
          <span><i class="far fa-trash-alt"></i></span>
        </div>
        <h5>Name</h5>
        <div className="row">
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Title</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">First Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Middle Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Last Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <label for="formGroupExampleInput">Preferred Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-2">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  Deceased
            </label>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-12">
            <h5>Contact</h5>
            <div className="row ">
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Home Phone</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
              </div>
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Mobile Number</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
              </div>
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Business Phone</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
              </div>
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Ext</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
              </div>
              <div className="col-2">
                <div class="form-group">
                  <label for="formGroupExampleInput">Fax Number</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <div class="form-group">
                  <label for="formGroupExampleInput">Email Address</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <hr/>
        <h5>Address</h5>
        <div className="row">
          <div className="col-4">
            <div class="form-group">
              <label for="formGroupExampleInput">Address</label>
              <textarea rows="5" type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-4">
            <div>
              <div class="form-group">
                <label for="formGroupExampleInput">City/Municipality</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
              </div>
            </div>
            <div>
              <div class="form-group">
                <label for="formGroupExampleInput">Country</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <div class="form-group">
                <label for="formGroupExampleInput">Province/State</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
              </div>
            </div>
            <div>
              <div class="form-group">
                <label for="formGroupExampleInput">Postal/Zipcode</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-4">
            <div class="form-group">
              <label for="formGroupExampleInput">Home Quarter</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  Residence is the same as listed address
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr/>

        <h5>Tax Number </h5>
        <div className="row">
          <div className="col-4">
          <div class="form-group">
              <label for="formGroupExampleInput">GST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-4">
          <div class="form-group">
              <label for="formGroupExampleInput">HST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-4">
          <div class="form-group">
              <label for="formGroupExampleInput">PST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-4">
          <div class="form-group">
              <label for="formGroupExampleInput">QST#</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
        </div>
        <hr/>

        <h5>Parent (Individual or Entity)</h5>
        <div className="row">
        <div className="col-6">
            <div class="form-group">
              <label for="formGroupExampleInput">Example label</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
        </div>
        </div>

        <hr/>
        <h5>Comments</h5>
        <div>
          <span><i class="far fa-edit"></i></span>
          &nbsp;
          <span><i class="far fa-trash-alt"></i></span>
        </div>
        <div className="row">
          <div className="col-8">
          <div class="form-group">
              <label for="formGroupExampleInput">Example label</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-1 icons-align">
            <i class="fas fa-2x fa-plus-square"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      
                  </div>
              </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">
                <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      
                  </div>
                </th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>              
            </tbody>
          </table>
          </div>
        </div>

        <hr/>

        
        <h5>Documents</h5>
        <div>
          <span><i class="far fa-edit"></i></span>
          &nbsp;
          <span><i class="far fa-trash-alt"></i></span>
        </div>
        <div className="row">
          <div className="col-8">
          <div class="form-group">
              <label for="formGroupExampleInput">Example label</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
          </div>
          <div className="col-1 icons-align">
          <i class="far fa-2x fa-folder"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      
                  </div>
                </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">
                <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck" />                      
                  </div>
                </th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>              
            </tbody>
          </table>
          </div>
        </div>

      </div>
    )

  }

}