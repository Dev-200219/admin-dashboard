import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.css'
import { calendarEvents } from '../../calendarData'

function Calendar() {
    const [events, setEvents] = useState(calendarEvents);

    let handleEvents = async (events) => {
        await Promise.resolve(setEvents(events));
    }

    let handleDateSelect = (selectInfo) => {
        let title = prompt('Enter event title');
        let calendarAPI = selectInfo.view.calendar;

        calendarAPI.unselect();

        if (title) {
            calendarAPI.addEvent({
                id: events.length + 1,
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
    }

    let handleEventClick = (event) => {
        let isSure = window.confirm('Are you sure you want to delete this event?');
        if (isSure) {
            event.event.remove();
        }
    }

    return (
        <div className="calendar-container">
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    allDaySlot={true}
                    initialView='dayGridMonth'
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    nowIndicator={true}
                    initialEvents={events}
                    eventsSet={handleEvents}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                />
            </div>
        </div>
    )
}

export default Calendar