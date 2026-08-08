import styles from './CalendarMonth.module.scss';
import type { EachDayOfIntervalResult } from "date-fns/eachDayOfInterval";
import type { eventsInfo } from "../../../types/dataInfo";
import type { Dispatch, SetStateAction } from "react";
import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";
import cn from 'classnames';

type Props = {
  data: eventsInfo[] | [];
  days: EachDayOfIntervalResult<{
    start: Date;
    end: Date;
  }, undefined>;
  selectedDay: string;
  setSelectedDay: Dispatch<SetStateAction<string>>;
  currentMonthStart: Date;
}

const CalendarMonth = ({
  data,
  days,
  selectedDay,
  setSelectedDay,
  currentMonthStart
}: Props) => {
  return (
    <>
      {days.map(day => {
        const dayEvents = data.filter(event =>
          isSameDay(new Date(event.date), day)
        );

        const isCurrentMonth = isSameMonth(day, currentMonthStart);

        return (
          <div key={day.toString()} className={cn(styles.calendar__dayCell,
            day.toString() === selectedDay && styles.calendar__dayCell_selected, {
            [styles.calendar__dayCell_hasEvent]: dayEvents.length > 0
          })}>
            <span
              onClick={() => setSelectedDay(day.toString())}
              className={cn(
                styles.calendar__day,
                !isCurrentMonth && styles.calendar__day_outside,
              )}
            >{day.getDate()}</span>
          </div>
        );
      })}
    </>
  );
};

export default CalendarMonth;
