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
import iconConfirmed from '../../assets/icons/green-axcepted.svg';
import cn from 'classnames';
import Loader from '../Loader/Loader';

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
  const [userData, setUserData] = useState<UserInfo>(() => {
    const savedData = sessionStorage.getItem('register_user_data');

    return savedData ? JSON.parse(savedData) : initialData;
  });

  const [errorData, setErrorData] = useState<ErrorType>(() => {
    const savedData = sessionStorage.getItem('register_user_data');

    if (savedData) {
      const currentFields = JSON.parse(savedData);
      const isValid = validData(currentFields);
      
      console.log(isValid);

      return isValid;
    }

    return {
      firstName: '',
      secondName: '',
      email: '',
      number: '',
    };
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const isDisabled = useMemo(() => {
    const lol = errorData.email === 'Confirmed'
      && errorData.firstName === 'Confirmed'
      && errorData.secondName === 'Confirmed'
      && errorData.number === 'Confirmed';

    console.log(lol);

    return lol;
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
      (isValid.email.length > 0 && isValid.email !== 'Confirmed')
      || (isValid.firstName.length > 0 && isValid.firstName !== 'Confirmed')
      || (isValid.secondName.length > 0 && isValid.secondName !== 'Confirmed')
      || (isValid.number.length > 0 && isValid.number !== 'Confirmed')
    ) {
      return;
    }

    setIsClicked(true);

    setTimeout(() => {
      setIsLoading(true);
      setIsClicked(false);
    }, 160);

    setTimeout(() => {
      setIsLoading(false);

      navigate(`/${truthPath}`);
    }, 2000);
  }

  return (
    <>
      <div className={style.registerForm}>
        <RegisterTopBar fraction={27} />

        {isLoading && (
          <Loader />
        )}

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
                className={cn(style.registerForm__input, {
                  [style['registerForm__input--error']]: !!errorData.firstName,
                  [style['registerForm__input--confirmed']]: errorData.firstName === 'Confirmed',
                })}

                type="text"
                placeholder='Олександр'
                name='name user'
                value={userData.firstName}

                onChange={(e) => {
                  setUserData(prev => {
                    const updatedState = {
                      ...prev,
                      firstName: e.target.value
                    };

                    sessionStorage.setItem('register_user_data', JSON.stringify(updatedState));

                    return updatedState;
                  });
                }}

                onBlur={() => {
                  const isValid = validData(userData);

                  setErrorData(cur => {
                    return {
                      ...cur,
                      firstName: isValid.firstName,
                    }
                  });
                }}
              />

              <div className={cn(style.registerForm__confirmData, {
                [style.registerForm__confirmed]: errorData.firstName === 'Confirmed',
              })}>
                <img src={iconConfirmed} alt="" className={style.registerForm__iconConfirmed} />

                Confirmed
              </div>

              <div className={cn(style.registerForm__errorOfEmail, {
                [style.registerForm__isError]:
                  !!errorData.firstName && errorData.firstName !== 'Confirmed',
              })}>
                <img src={iconError} alt="" className={style.registerForm__errorIcon} />

                {errorData.firstName}
              </div>

            </label>

            <label className={style.registerForm__label}>
              Прізвище

              <input
                className={cn(style.registerForm__input, {
                  [style['registerForm__input--error']]:
                    !!errorData.secondName,

                  [style['registerForm__input--confirmed']]:
                    errorData.secondName === 'Confirmed',
                })}

                type="text"
                placeholder='Демченко'
                name='second name'
                value={userData.secondName}

                onChange={(e) => {
                  setUserData(prev => {
                    const updatedState = {
                      ...prev,
                      secondName: e.target.value
                    };

                    sessionStorage.setItem('register_user_data', JSON.stringify(updatedState));

                    return updatedState;
                  });
                }}

                onBlur={() => {
                  const isValid = validData(userData);

                  setErrorData(cur => {
                    return {
                      ...cur,
                      secondName: isValid.secondName,
                    }
                  });
                }}
              />

              <div className={cn(style.registerForm__confirmData, {
                [style.registerForm__confirmed]: errorData.secondName === 'Confirmed',
              })}>
                <img
                  src={iconConfirmed}
                  alt=""
                  className={style.registerForm__iconConfirmed}
                />

                Confirmed
              </div>

              <div className={cn(style.registerForm__errorOfLastName, {
                [style.registerForm__isError]:
                  !!errorData.secondName && errorData.secondName !== 'Confirmed',
              })}>
                <img src={iconError} alt="" className={style.registerForm__errorIcon} />

                <div>{errorData.secondName}</div>
              </div>
            </label>

            <label className={style.registerForm__label}>
              Імейл

              <input
                className={cn(style.registerForm__input, {
                  [style['registerForm__input--error']]:
                    !!errorData.email,

                  [style['registerForm__input--confirmed']]:
                    errorData.email === 'Confirmed',
                })}

                type="email"
                placeholder='example@mail.com'
                name='email'
                value={userData.email}

                onChange={(e) => {
                  setUserData(prev => {
                    const updatedState = {
                      ...prev,
                      email: e.target.value
                    };

                    sessionStorage.setItem('register_user_data', JSON.stringify(updatedState));

                    return updatedState;
                  });
                }}

                onBlur={() => {
                  const isValid = validData(userData);
                  
                  console.log(isValid);
                  console.log(!!errorData.email && errorData.email !== 'Confirmed');
                  
                  setErrorData(cur => {
                    return {
                      ...cur,
                      email: isValid.email,
                    }
                  });

                  console.log(errorData);
                }}
              />

              <div className={cn(style.registerForm__confirmData, {
                [style.registerForm__confirmed]: errorData.email === 'Confirmed',
              })}>
                <img src={iconConfirmed} alt="" className={style.registerForm__iconConfirmed} />

                Confirmed
              </div>

              <div className={cn(style.registerForm__errorOfEmail, {
                [style.registerForm__isError]:
                  !!errorData.email && errorData.email !== 'Confirmed',
              })}>
                <img
                  src={iconError}
                  alt=""
                  className={style.registerForm__errorIcon}
                />

                <div>{errorData.email}</div>
              </div>

            </label>

            <label className={style.registerForm__label}>
              Номер телефону

              <input
                className={cn(style.registerForm__input, {
                  [style['registerForm__input--error']]:
                    !!errorData.number,

                  [style['registerForm__input--confirmed']]:
                    errorData.number === 'Confirmed',
                })}

                type="text"
                placeholder='+380 99 111 11 11'
                name='number'
                value={userData.cellNumber}

                onChange={(e) => {
                  setUserData(prev => {
                    const updatedState = {
                      ...prev,
                      cellNumber: e.target.value
                    };

                    sessionStorage.setItem('register_user_data', JSON.stringify(updatedState));

                    return updatedState;
                  });
                }}

                onBlur={() => {
                  const isValid = validData(userData);

                  setErrorData(cur => {
                    return {
                      ...cur,
                      number: isValid.number,
                    }
                  });
                }}
              />

              <div className={cn(style.registerForm__confirmData, {
                [style.registerForm__confirmed]: errorData.number === 'Confirmed',
              })}>
                <img src={iconConfirmed} alt="" className={style.registerForm__iconConfirmed} />

                Confirmed
              </div>

              <div className={cn(style.registerForm__errorOfNumber, {
                [style.registerForm__isError]:
                  !!errorData.number && errorData.number !== 'Confirmed',
              })}>
                <img
                  src={iconError}
                  alt=""
                  className={style.registerForm__errorIcon}
                />

                <div>{errorData.number}</div>
              </div>
            </label>
          </div>


          <FurtherButton
            pathPart={truthPath}
            disabled={isDisabled}
            isClicked={isClicked}
          />
        </form>

      </div>
    </>
  );
};

export default RegisterForm;
