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
  isSameMonth,
} from 'date-fns';
import { enUS, uk, de } from 'date-fns/locale';
import stylesCalendarOfEvents from './CalendarOfEvents.module.scss';
import { useMemo, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import useLang from '../TopBar/useLang';
import type { eventsInfo } from '../../types/dataInfo';
import ViewEvent from '../ViewEvent/ViewEvent';
import CalendarTopics from './CalendarTopics/CalendarTopics';

type Props = {
  data: eventsInfo[] | [],
  isFlow?: boolean;
}

const CalendarOfEvents = ({ data, isFlow = false }: Props) => {
  const today = startOfToday();
  const [activeDate, setActiveDate] = useState(today);
  const { t } = useTranslation();
  const { language } = useLang();

  const localeMap = {
    en: enUS,
    uk: uk,
    de: de,
  } as const;

  const locale = localeMap[language] ?? uk;

  console.log('Події');
  console.log(data);

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(new Date(2023, 0, i + 1), 'EEEEEE', { locale })
  );

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(activeDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(activeDate), { weekStartsOn: 1 });

    return eachDayOfInterval({ start, end });
  }, [activeDate]);

  const handlePrev = () => setActiveDate(subMonths(activeDate, 1));
  const handleNext = () => setActiveDate(addMonths(activeDate, 1));

  const monthName = format(activeDate, 'LLLL', { locale });
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const currentMonthStart = startOfMonth(activeDate);
  const [selectedDay, setSelectedDay] = useState<string>('');

  console.log(activeDate);
  console.log(selectedDay);

  return (
    <>
      <section className={stylesCalendarOfEvents.calendar}>
        <h1 className={cn(stylesCalendarOfEvents.calendar__title, {
          [stylesCalendarOfEvents['calendar__title--inFlow']]: isFlow,
        })}>{t('calendarTitle')}</h1>

        <div className={stylesCalendarOfEvents.calendar__topics}>
          <CalendarTopics />
        </div>

        <div className={stylesCalendarOfEvents.calendar__header}>
          <div className={stylesCalendarOfEvents.calendar__year}>{format(activeDate, 'yyyy')}</div>
        </div>

        <div className={stylesCalendarOfEvents.calendar__crumbs}>
          <button onClick={() => handlePrev()} className={cn(stylesCalendarOfEvents.calendar__back, stylesCalendarOfEvents.calendar__move)}></button>
          <span className={stylesCalendarOfEvents.calendar__month}>{capitalizedMonth}</span>
          <button onClick={() => handleNext()} className={cn(stylesCalendarOfEvents.calendar__forward, stylesCalendarOfEvents.calendar__move)}></button>
        </div>

        <div className={stylesCalendarOfEvents.calendar__weekDays}>
          {weekDays.map((day, index) => (
            <div key={index} className={stylesCalendarOfEvents.calendar__weekDay}>
              {day}
            </div>
          ))}
        </div>

        <div className={stylesCalendarOfEvents.calendar__calendarGrid}>
          {days.map(day => {
            const dayEvents = data.filter(event =>
              isSameDay(new Date(event.date), day)
            );

            const isCurrentMonth = isSameMonth(day, currentMonthStart);

            return (
              <div key={day.toString()} className={cn(stylesCalendarOfEvents.calendar__dayCell,
                day.toString() === selectedDay && stylesCalendarOfEvents.calendar__dayCell_selected, {
                  [stylesCalendarOfEvents.calendar__dayCell_hasEvent]: dayEvents.length > 0
                })}>
                <span
                  onClick={() => setSelectedDay(day.toString())}
                  className={cn(
                    stylesCalendarOfEvents.calendar__day,
                    !isCurrentMonth && stylesCalendarOfEvents.calendar__day_outside,
                  )}
                >{day.getDate()}</span>
              </div>
            );
          })}
        </div>
      </section>

      {!!selectedDay && (
        <ViewEvent slug={'event-12-03-2026'} />
      )}
    </>
  );
};

export default CalendarOfEvents;
