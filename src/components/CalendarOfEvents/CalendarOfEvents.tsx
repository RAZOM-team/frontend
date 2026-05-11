import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  format,
  addMonths,
  subMonths,
  startOfToday,
} from 'date-fns';
import { uk } from 'date-fns/locale';
import stylesCalendarOfEvents from './CalendarOfEvents.module.scss';
import { useMemo, useState } from 'react';
import cn from 'classNames';

const CalendarOfEvents = () => {
  const today = startOfToday();
  const [activeDate, setActiveDate] = useState(today);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(activeDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(activeDate), { weekStartsOn: 1 });

    return eachDayOfInterval({ start, end });
  }, [activeDate]);

  const events = [{ id: 1, date: '2026-05-29', type: 'cultural' }];
  const handlePrev = () => setActiveDate(subMonths(activeDate, 1));
  const handleNext = () => setActiveDate(addMonths(activeDate, 1));

  const monthName = format(activeDate, 'LLLL', { locale: uk });
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  console.log(activeDate);

  return (
    <>
      <section className={stylesCalendarOfEvents.calendar}>
        <h1>Календар подій</h1>

        <div className={stylesCalendarOfEvents.calendar__header}>
          <div className={stylesCalendarOfEvents.calendar__year}>{format(activeDate, 'yyyy')}</div>
        </div>

        <div>
          <button onClick={() => handlePrev()}></button>
          <span>{capitalizedMonth}</span>
          <button onClick={() => handleNext()}></button>
        </div>

        <div className={stylesCalendarOfEvents.calendar__calendarGrid}>
          {days.map(day => {
            const dayEvents = events.filter(event =>
              isSameDay(new Date(event.date), day)
            );

            console.log(dayEvents);

            return (
              <div key={day.toString()} className={cn(stylesCalendarOfEvents.calendar__dayCell, {
                [stylesCalendarOfEvents.calendar__dayCell_hasEvent]: dayEvents.length > 0
              })}>
                <span>{day.getDate()}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CalendarOfEvents;
