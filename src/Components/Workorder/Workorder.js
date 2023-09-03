import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import $ from 'jquery'
function Workorder() {

  const [data, setWorkOrderData] = useState([
    {
      "id": 1,
      "donorName": "Vishvas",
      "Panels": "3 panel , 12 panel",
      "barcode": "1234567",
      "Sources": "Self Pay",
      "Status": "Active"
    },
    {
      "id": 2,
      "donorName": "Vijay",
      "Panels": "3 sspanel , 12 panel",
      "barcode": "1ss234567",
      "Sources": "Self Pay",
      "Status": "Active"
    } ,
    {
      "id": 3,
      "donorName": "Avinash",
      "Panels": "3 sspanel ",
      "barcode": "12356",
      "Sources": "Self Pay",
      "Status": "Active"
    },
    {
      "id": 4,
      "donorName": "Akash",
      "Panels": "12TT",
      "barcode": "12678",
      "Sources": "Self Pay",
      "Status": "Settled"
    },
    {
      "id": 5,
      "donorName": "Varsha",
      "Panels": "22 GH",
      "barcode": "67894",
      "Sources": "Self Pay",
      "Status": "Pending"
    } ,
    {
      "id": 6,
      "donorName": "Kishor",
      "Panels": "57HH",
      "barcode": "13425",
      "Sources": "Mediclaim",
      "Status": "Active"
    } ,
    {
      "id": 7,
      "donorName": "Ganesh",
      "Panels": "55TT",
      "barcode": "43536",
      "Sources": "Self ",
      "Status": "Pending"
    } ,
    {
      "id": 8,
      "donorName": "Sam",
      "Panels": "11 JU",
      "barcode": "45467",
      "Sources": "Self",
      "Status": "Active"
    },
    {
      "id": 9,
      "donorName": "Avinah L",
      "Panels": "78 JK",
      "barcode": "98765",
      "Sources": "Self",
      "Status": "Active"
    },
    {
      "id": 10,
      "donorName": "Vijay C",
      "Panels": "3 sspanel",
      "barcode": "14567",
      "Sources": "Self Paid",
      "Status": "Active"
    },
    {
      "id": 11,
      "donorName": "Vshvas C",
      "Panels": "65JK",
      "barcode": "34567",
      "Sources": "Self",
      "Status": "Active"
    },
    {
      "id": 12,
      "donorName": "Vijay",
      "Panels": "3 sspanel , 12 panel",
      "barcode": "1ss234567",
      "Sources": "Self Pay",
      "Status": "Active"
    }
  ])

  const [action, setAction] = useState('')
  const [id, setId] = useState('')
  const [donorName, setDonorName] = useState('')
  const [Panels, setPanels] = useState('')
  const [barcode, setbarcode] = useState('')
  const [sources, setSources] = useState('')
  const [status, setStatus] = useState('')

  // FUNCTION FOR SUBMIT DATA
  const submitFunction = () => {
    let payload = {
      "id": data.length + 1,
      "donorName": donorName,
      "Panels": Panels,
      "barcode": barcode,
      "Sources": sources,
      "Status": status
    }
    let updatedData = [...data, payload]
    setWorkOrderData(updatedData)

    
    // $('#exampleModal').modal('hide');
    setAction('')
    setDonorName('')
    setPanels('')
    setbarcode('')
    setSources('')
    setStatus('')

    
  }

 // FUNCTION FOR UPDATE DATA
  const submitEditFunction = () => {
    let updatedData = data.map((item) => {
      if (id === item.id) {
        item.id = id
        item.donorName = donorName
        item.Panels = Panels
        item.barcode = barcode
        item.Sources = sources
        item.Status = status
      }
      return item
    })
    setWorkOrderData(updatedData)
    setAction('')
    setId('')
    setDonorName('')
    setPanels('')
    setbarcode('')
    setSources('')
    setStatus('')
  }
  //ASSIGN VALUE FOR STATE
  const editModal = (data) => {
    console.log(data)
    setId(data.id)
    setDonorName(data.donorName)
    setPanels(data.Panels)
    setbarcode(data.barcode)
    setSources(data.Sources)
    setStatus(data.Status)

  }

  // DELETE FUNCTION
  const deleteData = (idName) =>{
    console.log(idName ,"data1")
    let updatedData = data.filter((item)=> item.id !== idName)
    setWorkOrderData(updatedData)
    setId('')
  }
  
  const columns = [
    {
      name: "DONAR",
      selector: "donorName",
      sortable: true,
      // cell: (d) => (
      //   <a href="https://google.com" target="_blank" className="dlink">
      //     {d.title}
      //   </a>
      // )
    },
    {
      name: "PANELS",
      selector: "Panels",
      sortable: true
    },
    {
      name: "BARCODES",
      selector: "barcode",
      sortable: true
    },

    {
      name: "SOURCES",
      selector: "Sources",
      sortable: true
    },
    {
      name: "STATUS",
      selector: "Status",
      sortable: true,
      // cell: (d) => <span>{d.genres.join(", ")}</span>
    },
    {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (d) => [
        <i
          key={d.title}
          onClick={() => { editModal(d); setAction("Update") }}
          className="bi bi-pencil"
          data-toggle="modal"
          data-target="#exampleModal"

        ></i>,
        <i
          onClick={()=>deleteData(d.id)}
          className="bi bi-trash ml-2"
        ></i>
      ]
    }
  ];


  let tableData = {
    columns, data
  }
  console.log(data, tableData)
  return (
    <div>
      <div className='row'>
        <div className='col-md-4'>
          <button className='btn btn-info rounded-pill '
            data-toggle="modal"
            onClick={() => setAction("Add")}
            data-target="#exampleModal"
          >
            Create Order</button>

        </div>
      </div>
      {/* <DataTableExtensions {...tableData}> */}
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          //   sortIcon={<SortIcon />}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
        />
      {/* </DataTableExtensions> */}
      {/* MODAL FOR ADD AND EDIT */}
      <div
        className={action == '' ? "modal fade" : "modal fade show"}
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {action} Work Order
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col-md-6'>
                  <label>Donar Name</label>
                  <input value={donorName} onChange={(e) => setDonorName(e.target.value)} className='form-control' />
                </div>
                <div className='col-md-6'>
                  <label>Panels Name</label>
                  <input value={Panels} onChange={(e) => setPanels(e.target.value)} className='form-control' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label>Barcode</label>
                  <input value={barcode} onChange={(e) => setbarcode(e.target.value)} className='form-control' />
                </div>
                <div className='col-md-6'>
                  <label>Source</label>
                  <input value={sources} onChange={(e) => setSources(e.target.value)} className='form-control' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label>Status</label>
                  <input value={status} onChange={(e) => setStatus(e.target.value)} className='form-control' />
                </div>
                <div className='col-md-6 mt-4'>
                  <button className='btn btn-info rounded-pill '
                    onClick={() => { action == 'Add' ? submitFunction() : submitEditFunction() }}
                  >
                    {action} </button>
                </div>
              </div>

            </div>
            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Workorder 