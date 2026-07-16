import styles from './CalendarTopics.module.scss';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CalendarTopics = () => {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        spaceBetween={16}
        slidesPerView={'auto'}
      >
        <SwiperSlide className={styles.calendar__slide}>
          <button className={styles.calendar__category}>{t('categoryAll')}</button>
        </SwiperSlide>

        <SwiperSlide className={styles.calendar__slide}>
          <button className={styles.calendar__category}>{t('categoryInfo')}</button>
        </SwiperSlide>

        <SwiperSlide className={styles.calendar__slide}>
          <button className={styles.calendar__category}>{t('categorySocial')}</button>
        </SwiperSlide>

        <SwiperSlide className={styles.calendar__slide}>
          <button className={styles.calendar__category}>{t('categoryActivism')}</button>
        </SwiperSlide>

        <SwiperSlide className={styles.calendar__slide}>
          <button className={styles.calendar__category}>{t('categoryCultural')}</button>
        </SwiperSlide>

        <SwiperSlide className={styles.calendar__slide}>
          <button className={styles.calendar__category}>{t('categoryPsychological')}</button>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default CalendarTopics;
