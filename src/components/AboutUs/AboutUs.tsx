import { useTranslation } from 'react-i18next';
import stylesAboutUs from './AboutUs.module.scss';
import LinkVolunteer from './LinkVolunteer';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={stylesAboutUs.aboutUs} id='about-us'>
        <h2 className={stylesAboutUs.aboutUs__title}>{t('aboutTitle')}</h2>

        <p className={stylesAboutUs.aboutUs__describe}>{t('aboutText')}</p>

        <LinkVolunteer />
      </section>
    </>
  );
};

export default AboutUs;
