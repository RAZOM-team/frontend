import { useNavigate } from 'react-router-dom';
import style from './RegisterForm.module.scss';
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import JoinTitle from '../JoinTitle/JoinTitle';
import FurtherButton from '../FurtherButton/FurtherButton';
import LittleTitle from '../LittleTitle/LittleTitle';
import { useMemo, useState } from 'react';
import validData from './validData';
import type { UserInfo } from "../../App";
import iconError from '../../assets/icons/error-icon.svg';
import cn from 'classnames';

type Props = {
  joinAs: string;
  status?: 'member' | 'volunteer';
  initialData: UserInfo;
}

export type ErrorType = {
  firstName: string;
  secondName: string;
  email: string;
  number: string;
};

const RegisterForm = ({ joinAs, status, initialData }: Props) => {
  const [userData, setUserData] = useState<UserInfo>(initialData);
  const [errorData, setErrorData] = useState<ErrorType>({
    firstName: '',
    secondName: '',
    email: '',
    number: '',
  });

  const navigate = useNavigate();

  const isDisabled = useMemo(() => {
    return errorData.firstName.length > 0
      || errorData.secondName.length > 0
      || errorData.number.length > 0
      || errorData.email.length > 0;
  }, [errorData]);

  const truthPath = status === 'member'
    ? 'personalization'
    : 'volunteerPersonalization';

  console.log(userData);
  console.log(errorData);
  console.log(isDisabled);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('send data');

    const isValid = validData(userData);

    setErrorData(isValid);

    console.log(isValid);

    if (
      isValid.email.length > 0
      || isValid.firstName.length > 0
      || isValid.secondName.length > 0
      || isValid.number.length > 0
    ) {
      return;
    }

    navigate(`/${truthPath}`);
  }

  return (
    <>
      <div className={style.registerForm}>
        <RegisterTopBar fraction={27} />

        <JoinTitle joinAs={joinAs} />
        <LittleTitle text='Час нам познайомитися!' />

        <form
          className={style.registerForm__form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={style.registerForm__wrapperForm}>
            <label className={style.registerForm__label}>
              Ім’я
              <input
                type="text"
                className={style.registerForm__input}
                placeholder='Олександр'
                name='name user'
                onChange={(e) => {
                  setUserData(obj => {
                    return {
                      ...obj,
                      firstName: e.target.value,
                    }
                  });
                }}
              />
              <div className={cn(style.registerForm__errorOfEmail, {
                [style.registerForm__isError]: !!errorData.firstName,
              })}>
                <img src={iconError} alt="" className={style.registerForm__errorIcon} />

                {errorData.firstName}
              </div>
            </label>

            <label className={style.registerForm__label}>
              Прізвище
              <input
                type="text"
                className={cn(style.registerForm__input, {
                  [style.registerForm__isError]: !!errorData.secondName,
                })}
                placeholder='Демченко'
                name='second name'
                onChange={(e) => {
                  setUserData(obj => {
                    return {
                      ...obj,
                      lastName: e.target.value,
                    }
                  });
                }}
              />

              <div className={cn(style.registerForm__errorOfLastName, {
                [style.registerForm__isError]: !!errorData.secondName,
              })}>
                <img src={iconError} alt="" className={style.registerForm__errorIcon} />

                <div>{errorData.secondName}</div>
              </div>
            </label>

            <label className={style.registerForm__label}>
              Імейл
              <input
                type="email"
                className={style.registerForm__input}
                placeholder='example@mail.com'
                name='email'
                onChange={(e) => {
                  setUserData(obj => {
                    return {
                      ...obj,
                      email: e.target.value,
                    }
                  });
                }}
              />
              <div className={cn(style.registerForm__errorOfEmail, {
                [style.registerForm__isError]: !!errorData.email,
              })}>
                <img src={iconError} alt="" className={style.registerForm__errorIcon} />

                <div>{errorData.email}</div>
              </div>
            </label>

            <label className={style.registerForm__label}>
              Номер телефону
              <input
                type="text"
                className={style.registerForm__input}
                placeholder='+380 99 111 11 11'
                name='number'
                onChange={(e) => {
                  setUserData(obj => {
                    return {
                      ...obj,
                      cellNumber: e.target.value,
                    }
                  });
                }}
              />
              <div className={cn(style.registerForm__errorOfNumber, {
                [style.registerForm__isError]: !!errorData.number,
              })}>
                <img src={iconError} alt="" className={style.registerForm__errorIcon} />
                <div>{errorData.number}</div>
              </div>
            </label>
          </div>

          {/* <div
            className={style.registerForm__buttonWrapper}
            onClick={() => {
              console.log('further');
              validData(userData, setUserData, setErrorData);
            }}>
          </div> */}

          <FurtherButton
            pathPart={truthPath}
          // disabled={isDisabled}
          />
        </form>

      </div>
    </>
  );
};

export default RegisterForm;
