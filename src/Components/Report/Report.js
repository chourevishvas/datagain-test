import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'

function Report() {
    const [reportType,setReportType] = useState('')
    const [startDate,setStartDate] = useState('')
    const [dueDate,setDueDate] = useState('')
    const [agency,setAgency] = useState('')
    const [format,setFormat] = useState('')
    const [usedata,setUsedata] = useState('')
    
    const submitFunction = () =>{
        let payload = {
            "reportType":reportType,
            "startDate":startDate,
            "dueDate":dueDate,
            "agency":agency,
            "format":format,
            "usedata":usedata
        }
        toast("Form Submitted ")
        console.log(payload)
    }
    return (
        <div className=''>
           <ToastContainer />
            <div className='p-2 text-dark-50 '> <strong>Reports</strong></div>
            <div className='row'>
                <div class="col mb-3">
                    <select onChange={(e)=>setReportType(e.target.value)} className="form-control" aria-label="Default select report type">
                        <option selected>Select report type</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div className="col mb-3">
                    <label>Start Date</label>
                    <input  onChange={(e)=>setStartDate(e.target.value)} type="date" className="form-control" placeholder="Start Date" aria-label="Start Date" />
                </div>
                <div className="col mb-3">
                <label>End Date</label>

                    <input  onChange={(e)=>setDueDate(e.target.value)} type="date" className="form-control" placeholder="Due Date" aria-label="Due Date" />
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                <label>Agency</label>

                    <select  onChange={(e)=>setAgency(e.target.value)} className="form-control" aria-label="Default select example">
                        <option selected>Agency</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {/* <input type="text" class="form-control" placeholder="First name" aria-label="First name" /> */}
                </div>
                <div className="col mb-3">
                <label>Format</label>

                    <select  onChange={(e)=>setFormat(e.target.value)} className="form-control" aria-label="Default select example">
                        <option selected>Format</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {/* <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" /> */}
                </div>
            </div>

            <div>Use Date</div>
            <input  onChange={(e)=>setUsedata(e.target.value)} type="radio" id="html" name="fav_language" value="HTML" />
            <label  className="p-2" for="html">Collected</label><br></br>
            {/* <div className='d-flex justify-content-end'>

            </div> */}
            <div className='card'>
                <div className='card-body p-2 d-flex justify-content-end'>
                <button className='btn btn-info rounded-pill ' onClick={()=>submitFunction()}>Submit</button>           

                </div>
            </div>

            
        </div>
    )
}
export default Report 