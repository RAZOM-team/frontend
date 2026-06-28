import { Link } from 'react-router-dom';
import styles from './ViewEvent.module.scss';

const ViewEvent = ({ slug }: { slug: string }) => {
  return (
    <>
      <div className={styles.viewEvent}>
        <details className={styles.viewEvent__nameWrapper}>
          <summary className={styles.viewEvent__name}>
            <div className={styles.viewEvent__text}>
              <div className={styles.viewEvent__timePoint}>10:00</div>
              <div className={styles.viewEvent__line}></div>
              Ранок починається з настільних ігор
            </div>

            <span></span>
          </summary>

          <p className={styles.viewEvent__location}>Локація: Schildergasse 5, 50663 Düsseldorf</p>
          <p className={styles.viewEvent__rules}>Участь можлива лише для учасників!</p>

          <p className={styles.viewEvent__info}>
            Знайди нові знайомства та проведи приємно час у колі своєї спільноти.
            Ми надамо ігри (від Дженги до Імаджинаріуму) та смаколики, проте закликаємо приносити свої улюблені ігри та їжу, аби зробити цю подію ще приємнішою та різноманітнішою
          </p>

          <Link to={`/calendar/${slug}`}><button className={styles.viewEvent__register}>Зареєструватися на подію</button></Link>

        </details>

        <div className={styles.viewEvent__devideLine}></div>
      </div>
    </>
  );
};

export default ViewEvent;
