import style from './VolunteerPersonalization.module.scss';
import JoinTitle from "../JoinTitle/JoinTitle";
import LittleTitle from "../LittleTitle/LittleTitle";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import cn from 'classnames';
import { useState } from 'react';
import FurtherButton from '../FurtherButton/FurtherButton.tsx';
import AcceptConditions from '../AcceptConditions/AcceptConditions.tsx';

type Props<T> = {
  initialResponse: T,
}

const VolunteerPersonalization = <T,>({ initialResponse }: Props<T>) => {
  const [agree, setAgree] = useState<boolean | undefined>(undefined);
  const [responses, setResponses] = useState<T>(initialResponse);
  const [isAxcepted, setIsAxcepted] = useState(false);
  const [isAxceptedApplication, setIsAxceptedApplication] = useState(false);

  console.log(responses);

  return (
    <>
      <RegisterTopBar fraction={81} />

      <JoinTitle joinAs={"волонтер"} />
      <LittleTitle text={"Розкажіть нам про свої навички"} />

      <form className={style.personalization__form}>
        <label className={style.personalization__label}>
          Чим би ти хотів нам допомогти?

          <input
            type="text"
            placeholder="Наприклад, проводити майстер-класи"
            className={style.personalization__input}
            onChange={(e) => {
              setResponses(obj => {
                return {
                  ...obj,
                  yourHelp: e.target.value,
                }
              })
            }}
          />
        </label>

        <label className={style.personalization__label}>
          Скільки ти маєш вільного часу на тиждень?

          <input
            type="text"
            placeholder="2 години"
            className={style.personalization__input}
            onChange={(e) => {
              setResponses(obj => {
                return {
                  ...obj,
                  freeHours: e.target.value,
                }
              })
            }}
          />
        </label>

        <div className={style.personalization__label}>
          Долучення до організації є добровільною та неоплачуваною. Ти згоден на це?

          <input type="radio" className={style.personalization__radio} />
          <input type="radio" className={style.personalization__radio} />

          <div className={style.personalization__wrapper}>
            <label className={cn(style.personalization__label, style.personalization__label__radio)}
              onClick={() => {
                if (agree !== true) {
                  setAgree(true)
                  setResponses(obj => {
                    return {
                      ...obj,
                      agreeWorkForFree: true,
                    }
                  })
                }
              }}
            >
              <div className={cn(style.personalization__icon, {
                [style.personalization__icon__default]: agree === undefined || agree === false,
                [style.personalization__icon__chosen]: agree === true,
              })}></div>
              Так
            </label>

            <label className={cn(style.personalization__label, style.personalization__label__radio)}
              onClick={() => {
                if (agree !== false) {
                  setAgree(false)
                }
              }}>
              <div className={cn(style.personalization__icon, {
                [style.personalization__icon__default]: agree === undefined || agree === true,
                [style.personalization__icon__chosen]: agree === false,
              })}></div>
              Ні
            </label>
          </div>
        </div >
      </form >

      <AcceptConditions
        isAxcepted={isAxcepted}
        setIsAxcepted={setIsAxcepted}
        isVolunteer={true}
        isAxceptedApplication={isAxceptedApplication}
        setIsAxceptedApplication={setIsAxceptedApplication}
      />

      <FurtherButton pathPart={'registration-success'} />
    </>
  );
};

export default VolunteerPersonalization;
