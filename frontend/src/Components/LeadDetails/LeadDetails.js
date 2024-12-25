import React, { useState, useEffect } from "react";

function LeadDetails() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const leadId ="676be4360852a48338befd6c";
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/leads/${leadId}`);
            // Replace with your API URL
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
  
     
    
        fetchData();
      }, []); // Empty dependency array ensures the fetch runs only once on component mount.
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
    return (
        <div>
                 <div className="LeadInformation  py-2  " style={{ backgroundColor: 'white' }}>
             
             <div className="rows d-flex   my-2 w-75 mx-auto border-bottom border-secondary border-1">
             <h3>Lead Details</h3>
             </div>
             <div className="rows d-flex   my-2 w-75 mx-auto">
                 <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                     <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} >Lead Owner</p>
                     <p className=' my-0    ' style={{ height: "fit-content" }}> Maanof Group</p>
                 </div>
             

             </div>
             <div className="rows d-flex   my-2 w-75 mx-auto">
                 <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                     <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Email</p>
                     <p className=' my-0    ' style={{ height: "fit-content" }}> sagilfaraz@15gmail.com</p>
                 </div>
             

             </div>
             <div className="rows d-flex   my-2 w-75 mx-auto">
                 <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                     <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Phone</p>
                     <p className=' my-0    ' style={{ height: "fit-content" }}> 8709057771</p>
                 </div>
              

             </div>
             <div className="rows d-flex   my-2 w-75 mx-auto">
                 <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                     <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Lead Status</p>
                     <p className=' my-0    ' style={{ height: "fit-content" }}> InProgress</p>
                 </div>
          

             </div>
        
    

         </div>
            <div className="LeadInformation my-4" style={{ backgroundColor: 'white' }}>
             
                <div className="rows d-flex   my-2 w-75 mx-auto border-bottom border-secondary border-1">
                <h3>Hide Details</h3>
                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0  ' style={{ height: "fit-content" }} > Lead Owner</p>
                        <p className=' my-0  fw-lighter' style={{ height: "fit-content" }}> {data.leadOwner}</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Company</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> {data.company}</p>
                    </div>

                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > First Name</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> {data.firstName}</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} >Last Name</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> {data.lastName} </p>
                    </div>

                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Phone</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> 8709057771</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Email</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> faraz@gmail.com</p>
                    </div>

                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} >Lead Source</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> Aman</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Lead Status</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> InProgress</p>
                    </div>

                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} >Secondary Phone</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> 42352434323</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Secondary email</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> sagil@gmail.com</p>
                    </div>

                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} >Street</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> Main Road</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > City</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> New Delhi</p>
                    </div>

                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > State</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> Delhi</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Zip Code</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> 847874</p>
                    </div>

                </div>
                <div className="rows d-flex   my-2 w-75 mx-auto">
                    <div class=" d-flex  " style={{ width: "40%", height: "fit-content" }}>
                        <p className=' me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Country</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> India</p>
                    </div>
                    <div class=" d-flex   " style={{ width: "40%", height: "fit-content" }}>
                        <p className='   me-4 my-0 fw-semibold  ' style={{ height: "fit-content" }} > Maanof Pvt Ltd</p>
                        <p className=' my-0    ' style={{ height: "fit-content" }}> Maanof Pvt Ltd</p>
                    </div>

                </div>
       
             
            </div>
            <div className="LeadInformation my-4 py-2" style={{ backgroundColor: 'white' }}>
             
             <div className="rows d-flex   my-2 w-75 mx-auto border-bottom border-secondary border-1">
             <h3>Product</h3>
             </div>
             <div className="rows d-flex my-2 w-75 mx-auto border-bottom border-secondary border-1">
            <div className="items">Product Name </div>
            <div className="items">Product Code </div>
            <div className="items">Product Active  </div>
            <div className="items">Manufacturer</div>
            <div className="items">Support Start Date</div>
            <div className="items">Support End Date</div>
          
           </div>
       
          
    

         </div>
        </div>
    )
}

export default LeadDetails
