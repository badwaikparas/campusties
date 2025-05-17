import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';

// Tooltip rendered via React Portal
const Tooltip = ({ x, y, event }) => {
    return ReactDOM.createPortal(
        <div
            className="absolute z-50 bg-white border border-gray-300 shadow-lg p-2 text-xs rounded w-48"
            style={{
                top: y + 10,
                left: x,
                transform: 'translatey(+50%)',
                position: 'fixed',
                pointerEvents: 'none', // Allow hover to stay on calendar
            }}
        >
            <div className="font-semibold">{event.title}</div>
            <div className="text-gray-600">{event.time || 'Time not specified'}</div>
            <div className="text-gray-400 text-[10px]">{event.date}</div>
        </div>,
        document.body
    );
};

const bgColors = {
    1: 'bg-gray-200',
    2: 'bg-blue-200',
    3: 'bg-blue-400',
    4: 'bg-green-400',
    5: 'bg-yellow-400',
    6: 'bg-orange-400',
    7: 'bg-red-500',
    8: 'bg-pink-500',
    9: 'bg-purple-600',
};

const Calendar = ({ events }) => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [hoveredEvent, setHoveredEvent] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const today = dayjs();
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startDay = startOfMonth.day();
    const daysInMonth = currentDate.daysInMonth();

    const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
    const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

    const generateCalendar = () => {
        const days = [];

        // Empty days at start
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="text-gray-300">.</div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const day = dayjs(`${currentDate.format('YYYY-MM')}-${i.toString().padStart(2, '0')}`);
            const isToday = today.isSame(day, 'day');

            // Find matching event
            const matchedEvent = events?.find(event => dayjs(event.date).isSame(day, 'day'));
            const hasEvent = Boolean(matchedEvent);
            const level = matchedEvent?.level;

            days.push(
                <div
                    key={i}
                    className={`relative h-10 w-10 flex items-center justify-center rounded-full
            ${isToday ? 'bg-blue-500 text-white font-bold' : ''}
            ${hasEvent ? `border-2 ${bgColors[level]}` : ''}
            ${!isToday && !hasEvent ? 'hover:bg-blue-100 cursor-pointer' : ''}
          `}
                    onMouseEnter={(e) => {
                        if (!matchedEvent) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMousePos({ x: rect.left + rect.width / 2, y: rect.top });
                        setHoveredEvent(matchedEvent);
                    }}
                    onMouseLeave={() => setHoveredEvent(null)}
                >
                    {i}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="w-full p-4 rounded-2xl bg-white">
            <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="text-blue-500 hover:underline">{'<'}</button>
                <h2 className="text-xl font-bold">{currentDate.format('MMMM YYYY')}</h2>
                <button onClick={nextMonth} className="text-blue-500 hover:underline">{'>'}</button>
            </div>

            <div className="grid grid-cols-7 text-center font-semibold mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-gray-700">{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm overflow-visible">
                {generateCalendar()}
            </div>

            {hoveredEvent && (
                <Tooltip x={mousePos.x} y={mousePos.y} event={hoveredEvent} />
            )}
        </div>
    );
};

export default Calendar;
