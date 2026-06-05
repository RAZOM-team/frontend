import { useTranslation } from 'react-i18next';
import stylesAboutUs from './AboutUs.module.scss';
import donateImage from '../../assets/Vector.svg';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={stylesAboutUs.aboutUs} id='about-us'>
        <h2 className={stylesAboutUs.aboutUs__title}>{t('aboutTitle')}</h2>

        <p className={stylesAboutUs.aboutUs__describe}>{t('aboutText')}</p>

        <a
          href="#"
          className={stylesAboutUs.aboutUs__toSupport}
          aria-hidden="true"
          role="presentation"
          tabIndex={-1}
        >
          <div className={stylesAboutUs.aboutUs__volunteerHeading}>
            <h3 className={stylesAboutUs.aboutUs__volunteerHeading__1}>{t('volunteerLine1')}</h3>
            <h3 className={stylesAboutUs.aboutUs__volunteerHeading__2}>{t('volunteerLine2')}</h3>
          </div>

          <img src={donateImage} alt="" className={stylesAboutUs.aboutUs__donateImage} />
        </a>
      </section>
    </>
  );
};

export default AboutUs;
