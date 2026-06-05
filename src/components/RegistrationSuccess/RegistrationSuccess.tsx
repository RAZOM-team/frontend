import { Link } from "react-router-dom";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import styles from './RegistrationSuccess.module.scss';
import donateImage from '../../assets/Vector.svg';
import FurtherButton from "../FurtherButton/FurtherButton";

const RegistrationSuccess = () => {
  return (
    <>
      <div className={styles.registrationSuccess}>
        <RegisterTopBar fraction={108} />

        <h2 className={styles.registrationSuccess__title}>Вітаємо! Ви тепер частинка RAZOM!</h2>
        <div className={styles.registrationSuccess__action} >Ми надішлемо підтвердження на цей імейл:</div>
        <div className={styles.registrationSuccess__email}>example@mail.com</div>

        <Link to='/calendar' className={styles.registrationSuccess__toCalendar}>
          <div className={styles.registrationSuccess__volunteerHeading}>
            <h3 className={styles.registrationSuccess__volunteerHeading__1}>Бажаєте долучитися до наступної події?</h3>
            <h3 className={styles.registrationSuccess__volunteerHeading__2}>Тепер ви маєте доступ до усіх тематичних подій, консультацій та підтримки ЛГБТКІ+ ком’юніті! </h3>
          </div>

          <img src={donateImage} alt="" className={styles.registrationSuccess__donateImage} />
        </Link>

        <FurtherButton pathPart='' />
      </div>
    </>
  );
};

export default RegistrationSuccess;
