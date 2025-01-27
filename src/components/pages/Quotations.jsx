import React, { Component} from 'react';
import { useNavigate } from 'react-router-dom';

function Quotations(){
    const navigate = useNavigate();
    return(
        
        <div className='dash-container'>
            
            <ul>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/FIT-OUT")}>FIT-OUT </button>
                </li>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/HVAC")}>HVAC</button>
                </li>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/Electrical")}>ELECTRICAL</button>
                </li>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/Kitchen")}>KITCHEN</button>
                </li>
                <li>
                    <button className='dash-btn' onClick={()=>navigate("/Joinery")}>JOINERY</button>
                </li>
            
            <li>
                <button className='dash-btn' onClick={()=>navigate("/Furniture")}>FURNITURE</button>
            </li>
        </ul>
        </div>
    );


}
export default Quotations;