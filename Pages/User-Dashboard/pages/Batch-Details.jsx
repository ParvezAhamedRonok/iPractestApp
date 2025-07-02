
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Batch_Details = () => {
    const localizer = momentLocalizer(moment);

    // Sample events
    const [events, setEvents] = useState([
        {
            title: 'Team Meeting',
            start: new Date(2024, 11, 15, 10, 0), // Year, Month (0-based), Day, Hour, Minute
            end: new Date(2024, 11, 15, 11, 30),
            allDay: false,
        },
        {
            title: 'Project Deadline',
            start: new Date(2024, 11, 20),
            end: new Date(2024, 11, 20),
            allDay: true,
        },
    ]);

    const handleSelectSlot = (slotInfo) => {
        const title = prompt('Enter a title for your event:');
        if (title) {
            setEvents([
                ...events,
                {
                    title,
                    start: slotInfo.start,
                    end: slotInfo.end,
                    allDay: slotInfo.action === 'select',
                },
            ]);
        }
    };

    const handleSelectEvent = (event) => {
        alert(`Event: ${event.title}`);
    };

    return (
        <div style={{ height: '100vh', padding: '10px' }}>
            <h1 style={{ textAlign: 'center' }}>Full-Page Calendar</h1>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                style={{ height: '85vh' }}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
            />
        </div>
    );
};

export default Batch_Details;
