import { Link } from 'react-router-dom';
import Razom from '../RAZOM/Razom';
import TopBar from '../TopBar/TopBar';
import headerStyles from './HeaderStyles.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import cn from 'classnames';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <>
      <header className={cn(headerStyles.header,
        isOpenMenu && headerStyles.header__none,
      )} id='header'>
        {isOpenMenu &&
          <div className={headerStyles.header__nav}>
            <TopBar setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
            <Navigation openedMenu={true} />
          </div>
        }

        <TopBar setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />

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
