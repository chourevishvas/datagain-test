import React, { useState } from 'react';
import './Sidebar.css'
function Sidebar(props) {

    const [selectedName ,setSelectedName ] = useState('Calender Type')
    const sideBarOption = [
        {name:'Face Recognition' ,iconName:'bi bi-person-lines-fill' },
        {name:'Donors' ,iconName:'bi bi-gift' },
        {name:'Reports' ,iconName:'bi bi-briefcase' },
        {name:'Reports History' ,iconName:'bi bi-bookmark' },
        {name:'Daily Visit' ,iconName:'bi bi-calendar2-event' },
        {name:'Test History' ,iconName:'bi bi-briefcase' },
        {name:'Work Order' ,iconName:'bi bi-file-earmark-spreadsheet' },
        {name:'Calender Type' ,iconName:'bi bi-calendar' },
    ]
    return (
        <div>
            <ul className='removeUlBullet paddingicon side-bar'>
                {sideBarOption.map((item,index)=>{return(
                <><a className={item.name == selectedName ? 'activeName rounded-pill':'rounded-pill' } onClick={()=>{setSelectedName(item.name);props.getName(item.name)}} key={item.name} ><li className='rounded-pill p-2 d-flex justify-content-between'> <span><i className={item.iconName}></i>{item.name}</span><span><i className="bi bi-chevron-right"></i></span></li></a></>
                )})}
                </ul>
        </div>
    )
}
export default Sidebar