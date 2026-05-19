import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import stylesHeartRazom from './HeartRazom.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classNames';
import 'swiper/css';

const HeartRazom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const slides = [
    { id: 1, className: stylesHeartRazom.heartRazom__card__1, position: 'Графічний дизайнер', name: 'Діана Кієнко'},
    { id: 2, className: stylesHeartRazom.heartRazom__card__2, position: 'Зв\'язки з громадськістю', name: 'Марина Бахтінова'},
    { id: 3, className: stylesHeartRazom.heartRazom__card__3, position: 'Засновник RAZOM', name: 'Данило Савонік'},
    { id: 4, className: stylesHeartRazom.heartRazom__card__4, position: 'Скарбник', name: 'Олександр Недельчев'},
    { id: 5, className: stylesHeartRazom.heartRazom__card__5, position: 'Заступник', name: 'Владислав Коцар'},
  ];

  return (
    <>
      <section className={stylesHeartRazom.heartRazom}>
        <h2 className={stylesHeartRazom.heartRazom__title}>Серце RAZOM!</h2>

        <div className={stylesHeartRazom.heartRazom__swiperCards}>
          <Swiper
            initialSlide={2}
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={16}
            loop={true}
            onSwiper={setSwiper}
            onSlideChange={(swiperInstance) => setActiveIndex(swiperInstance.realIndex)}
            className={stylesHeartRazom.heartRazom__swiper}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className={stylesHeartRazom.heartRazom__slide}>
                <div className={stylesHeartRazom.heartRazom__cardWrapper}>
                  <div className={cn(stylesHeartRazom.heartRazom__card, slide.className)} />
                  
                  <div className={stylesHeartRazom.heartRazom__position}>{ slide.position }</div>
                  <div className={stylesHeartRazom.heartRazom__name}>{ slide.name }</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={stylesHeartRazom.heartRazom__customPagination}>
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={cn(
                  stylesHeartRazom.heartRazom__bullet,
                  index === activeIndex && stylesHeartRazom.heartRazom__bulletActive,
                )}
                onClick={() => swiper?.slideToLoop(index)}
                aria-label={`Перейти до слайда ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeartRazom;
