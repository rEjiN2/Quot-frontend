import React, { Component } from 'react'
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
function NewProject(){
    const navigate = useNavigate();

    return(
        <div className='dash-container'>
            <ul>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/InitialProcess")}>Initial Process</button>
                </li>
                <li>
                    <button className="dash-btn" onClick={()=>navigate("/Quotations")}>Quotations</button>
                </li>
                <li>
                    <button className="dash-btn" onClick={()=>navigate("/Invoice")}>Invoice</button>
                </li>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/Approval")}>Approval</button>
                </li>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/onsite")}>On Site</button>
                </li>
            </ul>
        </div>
    );
}
export default NewProject;





