import style from './RegisterForm.module.scss';
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import JoinTitle from '../JoinTitle/JoinTitle';
import FurtherButton from '../FurtherButton/FurtherButton';
import LittleTitle from '../LittleTitle/LittleTitle';
import { useState } from 'react';

type Props<T> = {
  joinAs: string;
  status?: 'member' | 'volunteer';
  initialData: T;
}

const RegisterForm = <T,>({ joinAs, status, initialData }: Props<T>) => {
  const [userData, setUserData] = useState<T>(initialData);

  const truthPath = status === 'member'
    ? 'personalization'
    : 'volunteerPersonalization';

  console.log(userData);

  return (
    <>
      <div className={style.registerForm}>
        <RegisterTopBar fraction={27} />

        <JoinTitle joinAs={joinAs} />
        <LittleTitle text='Час нам познайомитися!' />

        <form className={style.registerForm__form}>
          <label className={style.registerForm__label}>
            Ім’я
            <input
              type="text"
              className={style.registerForm__input}
              placeholder='Олександр'
              name='name user'
              onChange={(e) => setUserData(obj => {
                return {
                  ...obj,
                  firstName: e.target.value,
                }
              })}
            />

          </label>

          <label className={style.registerForm__label}>
            Прізвище
            <input
              type="text"
              className={style.registerForm__input}
              placeholder='Демченко'
              name='second name'
              onChange={(e) => setUserData(obj => {
                return {
                  ...obj,
                  lastName: e.target.value,
                }
              })}
            />

          </label>

          <label className={style.registerForm__label}>
            Імейл
            <input
              type="email"
              className={style.registerForm__input}
              placeholder='example@mail.com'
              name='email'
              onChange={(e) => setUserData(obj => {
                return {
                  ...obj,
                  email: e.target.value,
                }
              })}
            />

          </label>

          <label className={style.registerForm__label}>
            Номер телефону
            <input
              type="text"
              className={style.registerForm__input}
              placeholder='+380 99 111 11 11'
              name='number'
              onChange={(e) => setUserData(obj => {
                return {
                  ...obj,
                  cellNumber: e.target.value,
                }
              })}
            />

          </label>

        </form>

        <FurtherButton pathPart={truthPath} />
      </div>
    </>
  );
};

export default RegisterForm;
