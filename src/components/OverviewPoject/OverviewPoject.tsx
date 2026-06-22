import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; import TopBar from "../TopBar/TopBar";
import style from './OverviewPoject.module.scss';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';

const OverviewPoject = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <>
      <div className={style.overview}>
        <TopBar setIsOpenMenu={setIsOpenMenu} isBlack={true} />

        {isOpenMenu &&
          <div className={style.overview__nav}>
            <Navigation openedMenu={true} />
          </div>
        }

        <h2 className={style.overview__title}>Наші проєкти</h2>

        <h3 className={style.overview__littleTitle}>Інформація</h3>

        <div className={style.overview__info}>Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.</div>

        <div className={style.overview__swiperWrapper}>
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
          >
            <SwiperSlide>
              <h4>Equallity Hub
                (Хаб Рівності)
              </h4>

              <div>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

      </div>
    </>
  );
};

export default OverviewPoject;
