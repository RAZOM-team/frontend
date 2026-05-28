import { Link } from 'react-router-dom';
import Razom from '../RAZOM/Razom';
import TopBar from '../TopBar/TopBar';
import headerStyles from './HeaderStyles.module.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className={headerStyles.header}>
        <TopBar />

        <h1 className={headerStyles.header__mainTitle}>{t('headerMainTitle')}</h1>

        <Razom />

        <h2 className={headerStyles.header__title}>{t('headerSubtitle')}</h2>

        <Link to="/personalInfo">
          <button className={headerStyles.header__join}>
            {t('headerJoin')}
          </button>
        </Link>
      </header>
    </>
  );
};

export default Header;
