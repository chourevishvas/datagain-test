import React ,{useState} from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { event } from 'jquery';
// import timeGridPlugin from "@fullcalendar/timegrid";




function Calender() {
  const[eventTitle,seteventTitle] =useState("") ;
  const[eventDate,seteventDate] =useState("") ;
  const[events,setevents] =useState([
    { title: "DSM", start: getDate("YEAR-MONTH-02") },
    { title: "Get together", start: getDate("YEAR-MONTH-03") },
    {
      title: "Kedarnath",
      start: getDate("YEAR-MONTH-06"),
      backgroundColor: "green"
    },
    { title: "Happy Bday Akash", start: getDate("YEAR-MONTH-07") },
    { title: "Visit to Mumbai", start: getDate("YEAR-MONTH-08") },
    {
      title: "DIwalo Preparartion",
      start: getDate("YEAR-MONTH-09"),
      backgroundColor: "yellow",
      textColor: "black"
    },
    {
      title: "Office ",
      start: getDate("YEAR-MONTH-09"),
      backgroundColor: "purple"
    },
  
    { title: "Dussera", start: getDate("2023-10-28") },
    { title: "Simmaullanghan", start: getDate("2023-10-28"),
    backgroundColor: "red", },
   
    {
      start: getDate("YEAR-MONTH-23"),
      end: getDate("YEAR-MONTH-24"),
      allDay: true
    }
  ]) ;

  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
  // function to submit event data
  const submitEventData=()=>{
   let payload =  { title: eventTitle, start: getDate(eventDate) }
   let updatedEvent = [...events,payload]
   setevents(updatedEvent)
  }
  
  let firstDaty = 1;
  return (
    <div>
      {/* Event inputs */}
      <div class="row">
                <div className="col-md-4 mb-3">
                    <input  onChange={(e)=>seteventTitle(e.target.value)} type='text' className="form-control" placeholder="Enter eventname" />
                </div>
                <div className="col-md-4 mb-3">
                    <input  onChange={(e)=>seteventDate(e.target.value)} type="date" className="form-control" placeholder="Enter  eventdate" aria-label="Due Date" />
                </div>
                <div className='col-md-4'>
                  <button className='btn btn-primary' onClick={()=>submitEventData()}> Submit</button>
                </div>
            </div>
      <FullCalendar
        defaultView="dayGridMonth"
        firstDay={firstDaty}
        locale="english"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={events}
      />

    </div>
  )
}

export default Calender