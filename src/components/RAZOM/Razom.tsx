import stylesRazom from './Razom.module.scss';

const Razom = () => {
  return (
    <>
      <div className={stylesRazom.razom}>
        <span className={`${stylesRazom.razom__grapheme_red} ${stylesRazom.razom__grapheme}`}>R</span>
        <span className={`${stylesRazom.razom__grapheme_orange} ${stylesRazom.razom__grapheme}`}>A</span>
        <span className={`${stylesRazom.razom__grapheme_yellow} ${stylesRazom.razom__grapheme}`}>Z</span>
        <span className={`${stylesRazom.razom__grapheme_green} ${stylesRazom.razom__grapheme}`}>O</span>
        <span className={`${stylesRazom.razom__grapheme_blue} ${stylesRazom.razom__grapheme}`}>M</span>
        <span className={`${stylesRazom.razom__grapheme_purple} ${stylesRazom.razom__grapheme}`}>!</span>
      </div>
    </>
  );
};

export default Razom;
