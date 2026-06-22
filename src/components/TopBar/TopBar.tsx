import topBarStyles from './TopBar.module.scss';
import logo from '../../assets/razom-logo.svg';
import useLang from './useLang';
import type { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

type Props = {
  setIsOpenMenu?: Dispatch<SetStateAction<boolean>>;
  isBlack?: boolean;
}

const TopBar = ({ setIsOpenMenu, isBlack = false }: Props) => {
  const { language, setLanguage } = useLang();

  const changeLang = () => {
    if (language === 'en') {
      setLanguage('uk');
    } else if (language === 'uk') {
      setLanguage('de');
    } else {
      setLanguage('en');
    }
  };

  const openMenu = () => {
    console.log('isClick');

    if (setIsOpenMenu) {
      setIsOpenMenu((curr) => !curr)
    }
  };

  console.log(isBlack);

  return (
    <>
      <div className={topBarStyles.topBar}>
        <a href="#" className={topBarStyles.topBar__logoReference}>
          <img src={logo} alt="razom" className={topBarStyles.topBar__logo} />
        </a>

        <div className={topBarStyles.topBar__wrapper}>

          <button className={cn(topBarStyles.topBar__help,
            isBlack && topBarStyles.topBar__darkHelp,
          )}></button>

          <button className={cn(topBarStyles.topBar__UAlang,
            isBlack && topBarStyles.topBar__darkUAlang,
          )} onClick={() => changeLang()}></button>

          <button
            className={cn(
              topBarStyles.topBar__burger,
              isBlack && topBarStyles.topBar__darkBurger,
            )}
            onClick={() => openMenu()}>
          </button>

        </div>
      </div>
    </>
  );
};

export default TopBar;
