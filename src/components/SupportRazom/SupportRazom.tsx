
import styles from './SupportRazom.module.scss';
import donateImage from '../../assets/Vector.svg';
// import { useTranslation } from 'react-i18next';
import copyButton from '../../assets/icons/Copy-outline.svg';
import TopBar from '../TopBar/TopBar';
import cn from 'classnames';
import Footer from '../Footer/Footer';

const SupportRazom = () => {
  // const { t } = useTranslation();

  return (
    <>
      <div className={styles.support}>
        <TopBar isBlack={true} />

        <div className={styles.support__mainContent}>

          <h2 className={styles.support__title}>Підтримай RAZOM!</h2>

          <p className={styles.support__describe}>Ми прагнемо розширювати наші можливості, різноманітність послуг та подій, тому будемо дуже вдячні, якщо ти підтримаєш нас фінансово. Це допоможе нам ставати краще!</p>

          <a
            href='/'
            target="_blank"
            className={styles.support__toSupport}
            aria-hidden="true"
            role="presentation"
            tabIndex={-1}
          >
            <div className={styles.support__volunteerHeading}>
              <h3 className={styles.support__volunteerHeading__1}><h3>Пожертвувати через PayPal</h3></h3>
            </div>

            <img src={donateImage} alt="" className={styles.support__donateImage} />
          </a>

          <p className={cn(styles['support__describe__1'], styles['support__describe'])}>Ти також можеш переказати бажану суму на банківський рахунок організації</p>

          <div className={styles.support__score}>
            <h3 className={styles.support__scoreTitle}>Банківський рахунок RAZOM! для пожертв</h3>

            <div className={styles.support__receiver}>
              Отримувач

              <div className={styles.support__data}>
                <span>RAZOM! e.V</span>

                <img src={copyButton} alt="" className={styles.support__copy} />
              </div>

            </div>

            <div className={styles.support__iban}>
              IBAN

              <div className={styles.support__data}>
                <span>DE 0000 0000 0000 0000 0000</span>

                <img src={copyButton} alt="" className={styles.support__copy} />
              </div>

            </div>

            <div className={styles.support__bic}>
              BIC

              <div className={styles.support__data}>
                <span>COLSDEXXX</span>

                <img src={copyButton} alt="" className={styles.support__copy} />
              </div>

            </div>

          </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default SupportRazom;
