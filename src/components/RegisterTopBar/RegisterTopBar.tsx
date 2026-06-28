import styles from './RegisterTopBar.module.scss';
import closeIcon from '../../assets/icons/Close.svg';
import backIcon from '../../assets/icons/Arrow-left-without-border.svg';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';

type partLevel = {
  fraction: number;
}

const RegisterTopBar = ({ fraction }: partLevel) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.registerTopBar}>
        <button className={styles.registerTopBar__backButton} onClick={() => navigate(-1)}>
          <img src={backIcon} alt="" className={styles.registerTopBar__backIcon} />
          <span className={styles.registerTopBar__back}>Назад</span>
        </button>

        <Link to={'/'}>
          <button className={styles.registerTopBar__close}>
            <img src={closeIcon} alt="" />
          </button>
        </Link>
      </div>

      <div className={styles.registerTopBar__levelLine}>
        <div 
          className={cn(styles.registerTopBar__passedPartsLevel, {
            [styles.registerTopBar__passedPartsLevel__oneThird]: fraction === 27,
            [styles.registerTopBar__passedPartsLevel__fifty]: fraction === 50,
            [styles.registerTopBar__passedPartsLevel__twoThird]: fraction === 81,
            [styles.registerTopBar__passedPartsLevel__full]: fraction === 108,
          })}
        ></div>
      </div>
    </>
  );
};

export default RegisterTopBar;
