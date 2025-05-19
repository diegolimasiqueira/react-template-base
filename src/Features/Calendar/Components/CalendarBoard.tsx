import React, { useState } from 'react';
import { Box, useTheme, Paper } from '@mui/material';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';
import { getCalendarStyles } from '../Styles/calendarTheme';
import { CalendarEvent } from '../Types/calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const DnDCalendar = withDragAndDrop<CalendarEvent, object>(Calendar);

const initialEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Active Sample - Inspection',
    start: new Date(2025, 4, 20, 9, 0),
    end: new Date(2025, 4, 20, 11, 0),
    resource: { status: 'active' }
  },
  {
    id: '2',
    title: 'Inactive Sample - Review',
    start: new Date(2025, 4, 21, 13, 0),
    end: new Date(2025, 4, 21, 15, 0),
    resource: { status: 'inactive' }
  },
  {
    id: '3',
    title: 'Meeting - Project Kickoff',
    start: new Date(2025, 4, 22, 10, 0),
    end: new Date(2025, 4, 22, 12, 0),
    resource: { status: 'meeting' }
  },
  {
    id: '4',
    title: 'Active Sample - Analysis',
    start: new Date(2025, 4, 20, 14, 0),
    end: new Date(2025, 4, 20, 16, 0),
    resource: { status: 'active' }
  },
  {
    id: '5',
    title: 'Inactive Sample - Cleanup',
    start: new Date(2025, 4, 21, 8, 0),
    end: new Date(2025, 4, 21, 10, 0),
    resource: { status: 'inactive' }
  },
  {
    id: '6',
    title: 'Meeting - Team Sync',
    start: new Date(2025, 4, 22, 11, 0),
    end: new Date(2025, 4, 22, 12, 0),
    resource: { status: 'meeting' }
  },
];

export const CalendarBoard = () => {
  const theme = useTheme();
  const styles = getCalendarStyles(theme);
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<'week' | 'day' | 'month' | 'agenda' | 'work_week'>('week');

  console.log('Loaded events:', events);

  const moveEvent = ({ event, start, end }: any) => {
    const updatedEvents = events.map(ev =>
      ev.id === event.id ? { ...ev, start, end } : ev
    );
    setEvents(updatedEvents);
  };

  const eventPropGetter = (event: object) => {
    const e = event as CalendarEvent;
    let style = { ...styles.event };
    if (e.resource?.status === 'active') {
      style = { ...style, ...styles.eventActive };
    } else if (e.resource?.status === 'inactive') {
      style = { ...style, ...styles.eventInactive };
    } else if (e.resource?.status === 'meeting') {
      style = { ...style, ...styles.eventMeeting };
    }
    return { style };
  };

  const handleSelectSlot = (slotInfo: { start: Date, end: Date }) => {
    console.log('Slot selecionado:', slotInfo);
    // Implementar lógica para criar novo evento
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    console.log('Evento selecionado:', event);
    // Implementar lógica para editar/visualizar evento
  };

  const handleSelecting = (range: { start: Date, end: Date }) => {
    console.log('Selecionando intervalo:', range);
    return true;
  };

  const handleDoubleClickEvent = (event: CalendarEvent) => {
    console.log('Double click no evento:', event);
    // Implementar lógica para abrir modal de edição, por exemplo
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleView = (newView: 'week' | 'day' | 'month' | 'agenda' | 'work_week') => {
    setView(newView);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Paper sx={styles.calendar}>
        <DnDCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          onEventDrop={moveEvent}
          draggableAccessor={() => true}
          eventPropGetter={eventPropGetter}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          onSelecting={handleSelecting}
          onDoubleClickEvent={handleDoubleClickEvent}
          getDrilldownView={(targetDate, currentView, interactedView) => null}
          popup
          resizable
          views={['week', 'day', 'month', 'work_week', 'agenda']}
          defaultView="week"
          date={date}
          view={view}
          onNavigate={handleNavigate}
          onView={handleView}
        />
      </Paper>
    </DndProvider>
  );
}; 