import { useMemo, useState } from "react";
import FurtherButton from "../FurtherButton/FurtherButton";
import JoinTitle from "../JoinTitle/JoinTitle";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import style from "./Personalization.module.scss";
import AcceptConditions from "../AcceptConditions/AcceptConditions";
import { useNavigate } from "react-router-dom";

import iconError from '../../assets/icons/error-icon.svg';
import iconConfirmed from '../../assets/icons/green-axcepted.svg';

import cn from 'classnames';
import Loader from "../Loader/Loader";

const Personalization = () => {
  const [isAxcepted, setIsAxcepted] = useState<boolean>(false);
  const [inputInterests, setInputInterests] = useState(() => {
    const savedData = sessionStorage.getItem('register_user_interests');

    console.log(savedData);

    return savedData ? JSON.parse(savedData) : '';
  });

  const [errorData, setErrorData] = useState(() => {
    const savedData = sessionStorage.getItem('register_user_interests');

    if (savedData !== '""' && savedData) {
      const currentFields = JSON.parse(savedData);

      return currentFields.length <= 5
        ? 'Це поле має містити не менше 6 символів'
        : 'Confirmed';
    }

    return '';
  });

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const isDisabled = useMemo(() => {
    return inputInterests.length > 5 && isAxcepted === true ? true : false;
  }, [inputInterests, isAxcepted]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('handleSubmit');

    if (inputInterests.length > 5) {
      setErrorData('Confirmed');
    } else if (inputInterests.length < 5) {
      setErrorData('Це поле має містити не менше 6 символів');
    }

    if (!isDisabled) {
      return;
    }

    sessionStorage.removeItem('register_user_data');
    sessionStorage.removeItem('register_user_interests');

    setIsClicked(true);

    setTimeout(() => {
      setIsLoading(true);
      setIsClicked(false);
    }, 160);

    setTimeout(() => {
      setIsLoading(false);

      navigate('/registration-success');
    }, 1500);
  }

  console.log(errorData);
  console.log(inputInterests);
  console.log(errorData === 'Confirmed');
  console.log(inputInterests.length < 6 && errorData !== 'Confirmed');

  return (
    <>
      <div className={style.personalization}>

        {isLoading && (
          <Loader />
        )}

        <RegisterTopBar fraction={81} />
        <JoinTitle joinAs={'учасник'} />

        <div className={style.personalization__littleTitle}>Персоналізуємо пропозиції для вас</div>

        <form className={style.personalization__form} onSubmit={handleSubmit}>

          <label className={style.personalization__label}>
            Що вас цікавить у нашій організації найбільше?

            <input
              type="text"
              placeholder="Наприклад, тематичні івенти"
              name="interests"
              value={inputInterests}

              className={cn(style.personalization__input, {
                [style['personalization__input--error']]:
                  errorData.length > 0 && errorData !== 'Confirmed',

                [style['personalization__input--confirmed']]: inputInterests.length >= 6,
              })}

              onChange={(e) => {
                setInputInterests(e.target.value);

                sessionStorage.setItem('register_user_interests', JSON.stringify(e.target.value));

                if (e.target.value === '') {
                  console.log(e.target.value);
                  
                  sessionStorage.removeItem('register_user_data');
                }
              }}

              onBlur={() => {
                if (inputInterests.length < 6) {
                  setErrorData('Це поле має містити не менше 6 символів');
                }

                if (inputInterests.length > 5) {
                  setErrorData('Confirmed');
                }
              }}
            />

          </label>

          {inputInterests.length < 6
            && errorData !== 'Confirmed'
            && errorData !== '' && (
            <div className={style.personalization__errorWrapper}>
              <img src={iconError} alt="" />

              <div className={style.personalization__error}>{errorData}</div>
            </div>
          )}

          {errorData === 'Confirmed' && (
            <div className={style.personalization__confirmedWrapper}>
              <img
                src={iconConfirmed}
                alt=""
                className={style.registerForm__iconConfirmed}
              />

              <div className={style.personalization__confirmed}>
                {errorData}
              </div>
            </div>
          )}

          <FurtherButton
            pathPart='registration-success'
            disabled={isDisabled}
            isClicked={isClicked}
          />

        </form>

        <AcceptConditions isAxcepted={isAxcepted} setIsAxcepted={setIsAxcepted} />
      </div>
    </>
  );
};

export default Personalization;
