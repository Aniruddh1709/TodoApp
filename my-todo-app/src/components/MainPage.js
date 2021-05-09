import React from 'react'
import {
    Link
  } from "react-router-dom";
import "./MainPage.css"
function MainPage() {
    const [value,setValue]=React.useState('')
    return (
        <div className="bodyContainer">
            <div className="innerContainer">
                <div className="upperInner">Enter Your Name</div>
                <input value={value} onChange={(e)=>{setValue(e.target.value)}} className="insideInner" />
                <div>
                <Link to="/todos" onClick={()=>{alert(`Lets Go ${value}`)}}>Lets Go</Link>
                </div>
            </div>
            
        </div>
    )
}

export default MainPage;
