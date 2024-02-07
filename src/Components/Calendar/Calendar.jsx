import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './Calendar.css'

const Calendar = ()=>{
    const events = [
        {
            title: "event1",
            date: "2024-02-10"
        },{
            title: "event2",
            date: "2024-02-09"
        }
    ]

    const renderDayCell = ({date}) =>{
        const customStyles= {
            height: '5px',
            width: '5px'
        }

        return(
            <div style={customStyles}>
                {date.day}
            </div>
        )
    }

    return(
        <div>
            <FullCalendar eventClassNames="events" dayHeaderClassNames="day-head" viewClassNames="calendar" plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events}></FullCalendar>
        </div>
    )
}
export default Calendar;