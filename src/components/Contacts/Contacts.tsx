import styles from './Contacts.module.scss';
import BlackVector from '../../assets/icons/Vector-black.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import cellPhone from '../../assets/black-icons/call.svg';
import TopBar from '../TopBar/TopBar';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Socials from '../Socials/Socials';
import Policy from '../Policy/Policy';
import Razom from '../RAZOM/Razom';

const Contacts = () => {
  const subject = encodeURIComponent('about project RAZOM');
  const mailtoLink = `mailto:razomqueer@gmail.com?subject=${subject}`;
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    }
  }, [isOpenMenu]);

  return (
    <>
      <div className={cn(styles.contacts,
        isOpenMenu && styles.contacts__none
      )}>

        {isOpenMenu &&
          <div className={styles.contacts__nav}>
            <TopBar setIsOpenMenu={setIsOpenMenu} isBlack={isOpenMenu} isOpen={isOpenMenu} />
            <Navigation openedMenu={true} setIsOpenMenu={setIsOpenMenu} />
          </div>
        }

        <TopBar isBlack={true} setIsOpenMenu={setIsOpenMenu} />

        <div className={styles.contacts__wrapper}>

          <section className={styles.contacts__eamil}>

            <h2 className={styles.contacts__title}>Як із нами зв’язатися?</h2>

            <p className={styles.contacts__describe}>Ми цінуємо зворотній зв’язок стосовно наших активностей, атмосфери і багато іншого, що стосується життя організації.</p>

            <a href={mailtoLink} target='_blank' className={styles.contacts__container}>
              <h3 className={styles.contacts__emailTitle}>Напишіть нам імейл</h3>

              <p className={styles.contacts__description}>Ми будемо раді отримати твої пропозиції та відповісти на питання стосовно нашої організації</p>

              <img className={styles.contacts__icon} src={BlackVector} alt="" />
            </a>

            <h3 className={styles.contacts__socialNetworks}>Стежте за оновленнями в наших соцмережах</h3>

            <a href="https://www.instagram.com/razom.queer?igsh=MTN3anFpcWdrbGU2YQ==" target="_blank" rel="noopener noreferrer">
              <img className={styles.contacts__insta} src={instagramIcon} alt="" />
            </a>

          </section>

          <section className={styles.contacts__data}>
            <div>
              <h4 className={styles.contacts__hours}>Години роботи</h4>

              <div className={styles.contacts__line}></div>

              <p className={styles.contacts__time}>Будні дні (Понеділок-П’ятниця) 9:00-17:00</p>
            </div>

            <div>
              <h4 className={styles.contacts__phone}>
                Номер телефону
                <a className={styles.contacts__toCall} href="tel:+4915172822815">
                  <img src={cellPhone} alt="phone" className={styles.contacts__iconPhone} />
                </a>
              </h4>

              <div className={cn(styles.contacts__line, styles['contacts__line--cellPhone'])}></div>

              <p className={styles.contacts__call}>+4915172822815<br />Данило Савонік</p>
            </div>

            <div>
              <h4 className={styles.contacts__adress}>Адреса</h4>

              <div className={styles.contacts__line}></div>

              <p className={styles.contacts__place}>Наразі, ми в пошуку нашого затишного куточка... Тому ми відкриті до пропозицій!</p>
            </div>

          </section>
        </div>

        <Navigation />
        <Socials />
        <Policy />

        <div>
          <Razom />
        </div>
      </div>

    </>
  );
};

export default Contacts;
