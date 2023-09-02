import React, { useState } from 'react';
import './Sidebar.css'
function Sidebar(props) {

    const [selectedName ,setSelectedName ] = useState('Donate')
    const sideBarOption = [
        {name:'Donate' ,iconName:'bi bi-briefcase' },
        {name:'Reports' ,iconName:'bi bi-briefcase' },
        {name:'Reports History' ,iconName:'bi bi-briefcase' },
        {name:'Test History 1' ,iconName:'bi bi-briefcase' },
        {name:'Test History' ,iconName:'bi bi-briefcase' },
        {name:'Work Order' ,iconName:'bi bi-file-earmark-spreadsheet' },
        {name:'Calender Type' ,iconName:'bi bi-calendar' },
        {name:'Face Recognition' ,iconName:'bi bi-person-lines-fill' },
        {name:'Face Recognition' ,iconName:'bi bi-person-lines-fill' }
    ]
    return (
        <div>
            <ul className='removeUlBullet paddingicon side-bar'>
                {sideBarOption.map((item,index)=>{return(
                <a className={item.name == selectedName ? 'activeName rounded-pill':'rounded-pill' } onClick={()=>{setSelectedName(item.name);props.getName(item.name)}} key={item.name} ><li className='rounded-pill p-2'><i class={item.iconName}></i>{item.name}</li> <i className='icon-angle-right'></i> </a>
                )})}
                </ul>
        </div>
    )
}
export default Sidebar