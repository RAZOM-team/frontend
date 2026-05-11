import TopBar from '../TopBar/TopBar';
import headerStyles from './HeaderStyles.module.scss';

const Header = () => {
  return (
    <>
      <header className={headerStyles.header}>
        <TopBar />

        <h1 className={headerStyles.header__mainTitle}>Створімо твій безпечний простір</h1>

        <div>
          <span className={`${headerStyles.header__grapheme_red} ${headerStyles.header__grapheme}`}>R</span>
          <span className={`${headerStyles.header__grapheme_orange} ${headerStyles.header__grapheme}`}>A</span>
          <span className={`${headerStyles.header__grapheme_yellow} ${headerStyles.header__grapheme}`}>Z</span>
          <span className={`${headerStyles.header__grapheme_green} ${headerStyles.header__grapheme}`}>O</span>
          <span className={`${headerStyles.header__grapheme_blue} ${headerStyles.header__grapheme}`}>M</span>
          <span className={`${headerStyles.header__grapheme_purple} ${headerStyles.header__grapheme}`}>!</span>
        </div>

        <h2 className={headerStyles.header__title}>Приєднуйся до нашого<br /> ком’юніті</h2>

        <button className={headerStyles.header__join}>Стати учасником</button>
      </header>
    </>
  );
};

export default Header;
