import LinkVolunteer from '../AboutUs/LinkVolunteer';
import HeartRazom from '../HeartRazom/HeartRazom';
import Navigation from '../Navigation/Navigation';
import Policy from '../Policy/Policy';
import Razom from '../RAZOM/Razom';
import Socials from '../Socials/Socials';
import TopBar from '../TopBar/TopBar';
import WriteEmail from '../WriteEmail/WriteEmail';
import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <>
      <div className={styles.aboutUs}>
        <TopBar isBlack={true} />

        <div className={styles.aboutUs__wrapper}>
          <h2 className={styles.aboutUs__title}>Наша команда і цінності RAZOM!</h2>
          <p className={styles.aboutUs__describe}>Головний наш козир - атмосфера прийняття і свобода самовираження, адже саме ви - учасники - створюєте цей простір таким. Команда RAZOM! створює умови для цього затишку, тому давайте знайомитися!</p>
          <h2 className={styles.aboutUs__smallTitle}>Хто ми?</h2>

          <p className={styles.aboutUs__describe}>
            Ми - RAZOM!, нова українська ЛГБТКІ-ініціатива в Рейн-Рурському регіоні. Ми прагнемо створити новий бренд спільноти, який стане символом нашої сили та солідарності.
            <br />Наша організація – це простір для тих, хто шукає безпеки, розуміння та можливості бути собою серед однодумців.
          </p>

          <details className={styles.aboutUs__nameWrapper}>
            <summary className={styles.aboutUs__name}>Місія <span></span></summary>

            <p className={styles.aboutUs__info}>
              Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари
              та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.
            </p>
          </details>

          <div className={styles.aboutUs__devideLine}></div>

          <details className={styles.aboutUs__nameWrapper}>
            <summary className={styles.aboutUs__name}>Цінності <span></span></summary>

            <p className={styles.aboutUs__info}>
              Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари
              та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.
            </p>
          </details>
          <div className={styles.aboutUs__devideLine}></div>
          <details className={styles.aboutUs__nameWrapper}>
            <summary className={styles.aboutUs__name}>Світогляд <span></span></summary>
            <p className={styles.aboutUs__info}>
              Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари
              та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.
            </p>
          </details>
          <div className={styles.aboutUs__devideLine}></div>
        </div>

        <div className={styles.aboutUs__linkWrapper}>
          <LinkVolunteer />
        </div>

        <HeartRazom />


        <div className={styles.aboutUs__emailWrapper}>
          <WriteEmail />
        </div>

        <Navigation />
        <Socials />
        <Policy />

        <Razom />
      </div>
    </>
  );
};

export default AboutUsPage;
