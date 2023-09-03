import React from 'react';
import LeftSideIcons from '../LeftSideIcons/LeftSideIcon';

export default function Sheet() {
  return (
    <div className='row'>
        <div className='col-md-1 borderRight'>
            <LeftSideIcons/>
        </div>
        <div className='col-md- 12'>
            Sheet compoent
        </div>
    </div>
  )
}
