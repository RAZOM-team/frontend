import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; import TopBar from "../TopBar/TopBar";
import style from './OverviewPoject.module.scss';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import BlackVector from '../../assets/icons/Vector-black.svg';
import cn from 'classnames';
import Socials from '../Socials/Socials';
import Policy from '../Policy/Policy';
import Razom from '../RAZOM/Razom';

const OverviewPoject = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const bullets = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  return (
    <>
      <div className={cn(style.overview,
        isOpenMenu && style.overview__none
      )}>
        {isOpenMenu &&
          <div className={style.overview__nav}>
            <TopBar setIsOpenMenu={setIsOpenMenu} isBlack={isOpenMenu} isOpen={isOpenMenu} />
            <Navigation openedMenu={true} />
          </div>
        }

        <TopBar setIsOpenMenu={setIsOpenMenu} isBlack={true} />

        <h2 className={style.overview__title}>Наші проєкти</h2>

        <h3 className={style.overview__littleTitle}>Інформація</h3>

        <div className={style.overview__info}>Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.</div>

        <div className={style.overview__swiperWrapper}>
          <Swiper
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            spaceBetween={8}
            onSwiper={setSwiper}
            onSlideChange={(swiperInstance) => setActiveIndex(swiperInstance.realIndex)}
            className={style.overview__swiper}
          >
            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>

          <div className={style.overview__customPagination}>
            {bullets.map((bullet, index) => (
              <button
                key={bullet.id}
                type="button"
                className={cn(
                  style.overview__bullet,
                  index === activeIndex && style.overview__bulletActive,
                )}
                onClick={() => swiper?.slideToLoop(index)}
                aria-label={`Перейти до слайда ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <h3 className={style.overview__littleTitle}>Культурні та соціальні заходи</h3>

        <div className={style.overview__info}>Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.</div>

        <div className={style.overview__swiperWrapper}>
          <Swiper
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            spaceBetween={8}
            onSwiper={setSwiper}
            onSlideChange={(swiperInstance) => setActiveIndex(swiperInstance.realIndex)}
            className={style.overview__swiper}
          >
            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Простір Арт-Єдності</h4>

                <p className={style.overview__description}>Мистецтво — це універсальна мова, яка долає бар’єри. Створюючи спільний культурний простір, ми перетворюємо невидимість на творчу силу, що надихає суспільство на зміни та прийняття.</p>

                <p className={cn(style.overview__description, style['overview__description--last'])}>Проведення виставок, воркшопів та вечорів сторітелінгу, де кожен може безпечно презентувати свій досвід, знайти однодумців та відчути приналежність до великої спільноти</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Visible Impact
                  (Відчутний Вплив)
                </h4>

                <p className={style.overview__description}>Справжні зміни починаються там, де нас бачать і чують. Видимість — це не просто присутність, це заява про право бути собою в усіх сферах життя, від кав’ярні за рогом до великого бізнесу.</p>

                <p className={style['overview__description--last']}>Адвокаційна діяльність та співпраця з локальними брендами для створення мережі дружніх просторів, що гарантують безпеку та повагу до кожного клієнта незалежно від ідентичності.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Visible Impact
                  (Відчутний Вплив)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Visible Impact
                  (Відчутний Вплив)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Visible Impact
                  (Відчутний Вплив)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>

          <div className={style.overview__customPagination}>
            {bullets.map((bullet, index) => (
              <button
                key={bullet.id}
                type="button"
                className={cn(
                  style.overview__bullet,
                  index === activeIndex && style.overview__bulletActive,
                )}
                onClick={() => swiper?.slideToLoop(index)}
                aria-label={`Перейти до слайда ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <h3 className={style.overview__littleTitle}>Активізм та видимість</h3>

        <div className={style.overview__info}>Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.</div>

        <div className={style.overview__swiperWrapper}>
          <Swiper
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            spaceBetween={8}
            onSwiper={setSwiper}
            onSlideChange={(swiperInstance) => setActiveIndex(swiperInstance.realIndex)}
            className={style.overview__swiper}
          >
            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Справжні зміни починаються там, де нас бачать і чують. Видимість — це не просто присутність, це заява про право бути собою в усіх сферах життя, від кав’ярні за рогом до великого бізнесу.</p>

                <p className={cn(style.overview__description, style['overview__description--last'])}>Адвокаційна діяльність та співпраця з локальними брендами для створення мережі дружніх просторів, що гарантують безпеку та повагу до кожного клієнта незалежно від ідентичності.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>

          <div className={style.overview__customPagination}>
            {bullets.map((bullet, index) => (
              <button
                key={bullet.id}
                type="button"
                className={cn(
                  style.overview__bullet,
                  index === activeIndex && style.overview__bulletActive,
                )}
                onClick={() => swiper?.slideToLoop(index)}
                aria-label={`Перейти до слайда ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <h3 className={style.overview__littleTitle}>Психологічна підтримка</h3>

        <div className={style.overview__info}>Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.</div>

        <div className={style.overview__swiperWrapper}>
          <Swiper
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            spaceBetween={8}
            onSwiper={setSwiper}
            onSlideChange={(swiperInstance) => setActiveIndex(swiperInstance.realIndex)}
            className={style.overview__swiper}
          >
            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Внутрішня Гармонія</h4>

                <p className={style.overview__description}>Внутрішній ресурс — це фундамент, на якому будується життя. Ми створюємо середовище, де ментальне здоров’я є пріоритетом, а професійна допомога — доступною та позбавленою упереджень.</p>

                <p className={cn(style.overview__description, style['overview__description--last'])}>Індивідуальні та групові терапевтичні сесії з фахівцями, які розуміють специфіку запитів спільноти та працюють за принципами етики, глибокої емпатії та повної конфіденційності.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>

            <SwiperSlide className={style.overview__slide}>
              <a href="/" target='_blank' className={style.overview__container}>
                <h4 className={style.overview__projectTitle}>Equallity Hub
                  (Хаб Рівності)
                </h4>

                <p className={style.overview__description}>Твої права — твій захист! Знання своїх прав — це перший крок до їхнього захисту. Ми не просто надаємо інформацію, ми будуємо свідому та стійку спільноту, здатну захищати себе та підтримувати один одного.</p>

                <img className={style.overview__icon} src={BlackVector} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>

          <div className={style.overview__customPagination}>
            {bullets.map((bullet, index) => (
              <button
                key={bullet.id}
                type="button"
                className={cn(
                  style.overview__bullet,
                  index === activeIndex && style.overview__bulletActive,
                )}
                onClick={() => swiper?.slideToLoop(index)}
                aria-label={`Перейти до слайда ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <Navigation />
        <Socials />
        <Policy />
        <Razom />

      </div>
    </>
  );
};

export default OverviewPoject;
