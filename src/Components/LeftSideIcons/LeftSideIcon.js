import React from 'react'  ;
import  './LeftSideIcon.css' ;
import { Link } from 'react-router-dom';
function LeftSideIcons (){
    return (
        <>
            <div className='icon-bar'>
                <Link to="/"><i className="bi bi-house"></i></Link>
                <Link to="/sheet"><i className="bi bi-bar-chart-steps"></i> </Link>
                <Link to="/sheet"><i className="bi bi-question-circle"></i></Link>
                <Link to="/sheet"><i className="bi bi-gear-fill"></i></Link>
                <Link to="/sheet"><i className="bi bi-people"></i></Link>
                <Link to="/sheet"><i className="bi bi-power"></i></Link>
                <Link to="/sheet"><i className="bi bi-building-add"></i></Link>
            </div>          
        </>
    )
}
export default LeftSideIcons 