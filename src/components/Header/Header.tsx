import { Link, useLocation } from 'react-router-dom';
import Razom from '../RAZOM/Razom';
import TopBar from '../TopBar/TopBar';
import headerStyles from './HeaderStyles.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const location = useLocation();

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
      <header className={cn(headerStyles.header,
        isOpenMenu && headerStyles.header__none,
      )} id='header'>

        {isOpenMenu &&
          <div className={headerStyles.header__nav}>
            <TopBar
              setIsOpenMenu={setIsOpenMenu}
              isBlack={isOpenMenu}
              isOpen={true}
            />

            <Navigation openedMenu={true} setIsOpenMenu={setIsOpenMenu} />
          </div>
        }

        <TopBar setIsOpenMenu={setIsOpenMenu} isBlack={isOpenMenu} />

        <div className={headerStyles.header__wrapper}>

          <h1 className={headerStyles.header__mainTitle}>{t('headerMainTitle')}</h1>

          <Razom />

          <div className={headerStyles.header__elementsWrapper}>
            <h2 className={headerStyles.header__title}>{t('headerSubtitle')}</h2>

            <Link to="/personalInfo" state={{ backgroundLocation: location }}>
              <button className={headerStyles.header__join}>
                {t('headerJoin')}
              </button>
            </Link>

          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
