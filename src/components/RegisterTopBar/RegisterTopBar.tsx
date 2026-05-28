import styles from './RegisterTopBar.module.scss';
import closeIcon from '../../assets/icons/Close.svg';
import backIcon from '../../assets/icons/Arrow-left-without-border.svg';
import { Link, useNavigate } from 'react-router-dom';

const RegisterTopBar = () => {
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
    </>
  );
};

export default RegisterTopBar;
