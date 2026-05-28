import style from './RegisterForm.module.scss';
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <>
      <div className={style.registerForm}>
        <RegisterTopBar />

        <div className={style.registerForm__levelLine}>
          <div className={style.registerForm__passedPartsLevel}></div>
        </div>

        <h2 className={style.registerForm__title}>Приєднатися як<br /> учасник</h2>

        <div className={style.registerForm__littleTitle}>Час нам познайомитися!</div>

        <form className={style.registerForm__form}>
          <label className={style.registerForm__label}>
            Ім’я
            <input
              type="text"
              className={style.registerForm__input}
              placeholder='Олександр'
              name='name user'
            />

          </label>

          <label className={style.registerForm__label}>
            Прізвище
            <input
              type="text"
              className={style.registerForm__input}
              placeholder='Демченко'
              name='second name'
            />

          </label>

          <label className={style.registerForm__label}>
            Імейл
            <input
              type="email"
              className={style.registerForm__input}
              placeholder='example@mail.com'
              name='email'
            />

          </label>

          <label className={style.registerForm__label}>
            Номер телефону
            <input
              type="text"
              className={style.registerForm__input}
              placeholder='+380 99 111 11 11'
              name='number'
            />

          </label>

        </form>
        
        <Link to={'/personalization'}>
          <button className={style.registerForm__further}>
            Далі
          </button>
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
