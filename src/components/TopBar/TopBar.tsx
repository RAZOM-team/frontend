import topBarStyles from './TopBar.module.scss';
import logo from '../../assets/razom-logo.svg';

const TopBar = () => {
  return (
    <>
      <div className={topBarStyles.topBar}>
        <a href="#" className={topBarStyles.topBar__logoReference}>
          <img src={logo} alt="razom" className={topBarStyles.topBar__logo} />
        </a>

        <div className={topBarStyles.topBar__wrapper}>
          <button className={topBarStyles.topBar__help}></button>
          <button className={topBarStyles.topBar__UAlang}></button>
          <button className={topBarStyles.topBar__burger}></button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
