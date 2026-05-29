import { Link } from "react-router-dom";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import styles from './RegistrationSuccess.module.scss';
import image from '../../assets/events-image.png';

const RegistrationSuccess = () => {
  return (
    <>
      <div className={styles.registrationSuccess}>
        <RegisterTopBar fraction={108} />

        <h2 className={styles.registrationSuccess__title}>Вітаємо! Ви тепер частинка RAZOM!</h2>
        <div>Ми надішлемо підтвердження на цей імейл:</div>
        <div>example@mail.com</div>

        <Link to='/calendar'>
          <div className={styles.aboutUs__volunteerHeading}>
            <h3 className={styles.aboutUs__volunteerHeading__1}>Бажаєте долучитися до наступної події?</h3>
            <h3 className={styles.aboutUs__volunteerHeading__2}>Тепер ви маєте доступ до усіх тематичних подій, консультацій та підтримки ЛГБТКІ+ ком’юніті! </h3>
          </div>

          <img src={image} alt="" className={styles.aboutUs__donateImage} />
        </Link>
      </div>
    </>
  );
};

export default RegistrationSuccess;
