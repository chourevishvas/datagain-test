import React, { useState } from 'react';
import './Home.css'
import LeftSideIcons from '../LeftSideIcons/LeftSideIcon';
import Calender from '../Calender/Calender';
import Workorder from '../Workorder/Workorder';
import Report from '../Report/Report';
import Sidebar from '../SideBar/Sidebar'


function Home() {
    const [selectedCompName, setSelectedCompName] = useState("Donate")

    const getName = (name) => {
        console.log(name)
        setSelectedCompName(name)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-1 borderRight'>
                    <LeftSideIcons />
                </div>
                <div className='col-md-3'>
                    <Sidebar getName={getName} />
                </div>
                <div className='col-md-8'>
                    {selectedCompName} Compoent
                    {selectedCompName == 'Reports' && <Report />}
                    {selectedCompName == 'Work Order' && <Workorder/>}


                </div>
               

            </div>
            {/* <LeftSideIcons/>   */}
            {/* <Calender/> */}
            {/* <Workorder/> */}


        </div>
    )
}
export default Home 