import React from 'react'

function LeadForms() {
  return (
    <>
      {/* Lead Information */}
      <div className='LeadForms'>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <h3> Lead Information</h3>

        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Lead Owner</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Company</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">First Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Last Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Phone</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Lead Source</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Lead Status</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Secondary Phone</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Secondary Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
        </div>
      </div>



      {/* Adreess Inforamtion */}
      <div className='LeadForms mt-5'>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <h3>Adress Information</h3>

        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Street</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"  />
          </div>
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">City</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"  />
          </div>
        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">State</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"  />
          </div>
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Zip Code</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"  />
          </div>
        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div class="" style={{ width: "40%" }}>
            <label for="exampleFormControlInput1" class="form-label m-1">Country</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"  />
          </div>
   
        </div>
   
     
      </div>
       

      {/* Description  */}
      <div className='LeadForms mt-5'>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <h3>Description</h3>
        </div>
        <div className="rows d-flex justify-content-between  my-2 w-75 mx-auto">
          <div className=' w-100' >
            <label for="exampleFormControlInput1" class="form-label m-1">Description</label>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>
      <div className='LeadForms mt-5'>
        <div className="rows d-flex justify-content-end  my-2 w-75 mx-auto">
        <button type="button" class="btn btn-primary btn-sm py-2 px-5">Submit</button>     
           </div>
      
      </div>
    




    </>

  )
}

export default LeadForms
