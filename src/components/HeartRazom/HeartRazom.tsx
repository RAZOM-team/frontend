import stylesHeartRazom from './HeartRazom.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import 'swiper/css';
import { Scrollbar, Pagination } from 'swiper/modules';

const HeartRazom = () => {
  const slides = [
    { id: 1, className: stylesHeartRazom.heartRazom__card__1, position: 'Графічний дизайнер', name: 'Діана Кієнко' },
    { id: 2, className: stylesHeartRazom.heartRazom__card__2, position: 'Зв\'язки з громадськістю', name: 'Марина Бахтінова' },
    { id: 3, className: stylesHeartRazom.heartRazom__card__3, position: 'Засновник RAZOM', name: 'Данило Савонік' },
    { id: 4, className: stylesHeartRazom.heartRazom__card__4, position: 'Скарбник', name: 'Олександр Недельчев' },
    { id: 5, className: stylesHeartRazom.heartRazom__card__5, position: 'Заступник', name: 'Владислав Коцар' },
  ];

  return (
    <>
      <section className={stylesHeartRazom.heartRazom}>
        <h2 className={stylesHeartRazom.heartRazom__title}>Серце RAZOM!</h2>

        <div className={stylesHeartRazom.heartRazom__swiperCards}>
          <Swiper
            initialSlide={2}
            modules={[Scrollbar, Pagination]}
            navigation={false}
            slidesPerView={'auto'}
            spaceBetween={16}
            className={stylesHeartRazom.heartRazom__swiper}

            breakpoints={{
              320: {
                centeredSlides: true,
              },
              480: {
                centeredSlides: false,
              }
            }}

            pagination={{
              clickable: true,
              type: 'bullets',
              el: `.${stylesHeartRazom.heartRazom__customPagination}`,
              bulletClass: stylesHeartRazom.heartRazom__bullet,
              bulletActiveClass:
                stylesHeartRazom.heartRazom__bulletActive,
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className={stylesHeartRazom.heartRazom__slide}>
                <div className={stylesHeartRazom.heartRazom__cardWrapper}>
                  <div className={cn(stylesHeartRazom.heartRazom__card, slide.className)} />

                  <div className={stylesHeartRazom.heartRazom__position}>{slide.position}</div>
                  <div className={stylesHeartRazom.heartRazom__name}>{slide.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={stylesHeartRazom.heartRazom__customPagination}>
            {/* {slides.map((slide, index) => (
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
            ))} */}
          </div>
        </div>
      </section >
    </>
  );
};

export default HeartRazom;
