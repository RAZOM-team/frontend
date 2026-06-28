import styles from './LinkVolunteer.module.scss';
import donateImage from '../../assets/Vector.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LinkVolunteer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        to="/getVolunteer"
        className={styles.link__toSupport}
        aria-hidden="true"
        role="presentation"
        tabIndex={-1}
      >
        <div className={styles.link__volunteerHeading}>
          <h3 className={styles.link__volunteerHeading__1}>{t('volunteerLine1')}</h3>
          <h3 className={styles.link__volunteerHeading__2}>{t('volunteerLine2')}</h3>
        </div>

        <img src={donateImage} alt="" className={styles.link__donateImage} />
      </Link>
    </>
  );
};

export default LinkVolunteer;
