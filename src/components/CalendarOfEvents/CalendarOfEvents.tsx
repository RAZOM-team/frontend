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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CalendarOfEvents = () => {
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

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(new Date(2023, 0, i + 1), 'EEEEEE', { locale })
  ) ;

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(activeDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(activeDate), { weekStartsOn: 1 });

    return eachDayOfInterval({ start, end });
  }, [activeDate]);

  const events = [{ id: 1, date: '2026-05-29', type: 'cultural' }];
  const handlePrev = () => setActiveDate(subMonths(activeDate, 1));
  const handleNext = () => setActiveDate(addMonths(activeDate, 1));

  const monthName = format(activeDate, 'LLLL', { locale });
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const currentMonthStart = startOfMonth(activeDate);

  console.log(activeDate);

  return (
    <>
      <section className={stylesCalendarOfEvents.calendar}>
        <h1 className={stylesCalendarOfEvents.calendar__title}>{t('calendarTitle')}</h1>

        <div className={stylesCalendarOfEvents.calendar__topics}>
          <Swiper
            spaceBetween={16}
            slidesPerView={'auto'}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className={stylesCalendarOfEvents.calendar__slide}>
              <button className={stylesCalendarOfEvents.calendar__category}>{t('categoryAll')}</button>
            </SwiperSlide>

            <SwiperSlide className={stylesCalendarOfEvents.calendar__slide}>
              <button className={stylesCalendarOfEvents.calendar__category}>{t('categoryInfo')}</button>
            </SwiperSlide>

            <SwiperSlide className={stylesCalendarOfEvents.calendar__slide}>
              <button className={stylesCalendarOfEvents.calendar__category}>{t('categorySocial')}</button>
            </SwiperSlide>

            <SwiperSlide className={stylesCalendarOfEvents.calendar__slide}>
              <button className={stylesCalendarOfEvents.calendar__category}>{t('categoryActivism')}</button>
            </SwiperSlide>
            
            <SwiperSlide className={stylesCalendarOfEvents.calendar__slide}>
              <button className={stylesCalendarOfEvents.calendar__category}>{t('categoryCultural')}</button>
            </SwiperSlide>

            <SwiperSlide className={stylesCalendarOfEvents.calendar__slide}>
              <button className={stylesCalendarOfEvents.calendar__category}>{t('categoryPsychological')}</button>
            </SwiperSlide>

          </Swiper>
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
            const dayEvents = events.filter(event =>
              isSameDay(new Date(event.date), day)
            );

            const isCurrentMonth = isSameMonth(day, currentMonthStart);

            return (
              <div key={day.toString()} className={cn(stylesCalendarOfEvents.calendar__dayCell, {
                [stylesCalendarOfEvents.calendar__dayCell_hasEvent]: dayEvents.length > 0
              })}>
                <span
                  className={cn(
                    stylesCalendarOfEvents.calendar__day,
                    !isCurrentMonth && stylesCalendarOfEvents.calendar__day_outside
                  )}
                >{day.getDate()}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CalendarOfEvents;
