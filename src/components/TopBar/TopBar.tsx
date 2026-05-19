import topBarStyles from './TopBar.module.scss';
import logo from '../../assets/razom-logo.svg';
import useLang from './useLang';

const TopBar = () => {
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

  return (
    <>
      <div className={topBarStyles.topBar}>
        <a href="#" className={topBarStyles.topBar__logoReference}>
          <img src={logo} alt="razom" className={topBarStyles.topBar__logo} />
        </a>

        <div className={topBarStyles.topBar__wrapper}>
          <button className={topBarStyles.topBar__help}></button>
          <button className={topBarStyles.topBar__UAlang} onClick={() => changeLang()}></button>
          <button className={topBarStyles.topBar__burger}></button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
