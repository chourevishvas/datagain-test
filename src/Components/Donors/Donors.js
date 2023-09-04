import React, { useEffect, useState } from 'react' ;
import axios from 'axios';
import DataTable from 'react-data-table-component';


function Donors() {
    const[donorsData ,setDonorsData] =useState("")
    useEffect(()=>{getDonorsData()},[])
    const getDonorsData = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(data => setDonorsData(data.data))
            .catch(error => console.log(error));
    };
    console.log(donorsData ,"xyz")
    const columns = [
        {
            name: 'User Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'URL',
            selector: row => row.url,
            sortable: true,
        },
        {
            name: 'Images',
            selector: 'null',
            sortable: true,
            cell: (d) => [
                <img src={d.thumbnailUrl} width={20} height={20}/>
              ]
        },
    ];
  return (
    <div>Donors Data

<DataTable
            columns={columns}
            data={donorsData}
            pagination
        />
    </div>
  )
}

export default Donors