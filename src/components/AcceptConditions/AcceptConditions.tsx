import { type Dispatch, type SetStateAction } from 'react';
import style from './AcceptConditions.module.scss';
import cn from 'classnames';
import axceptIcon from '../../assets/icons/axcepted.svg';

type Props = {
  isAxcepted: boolean,
  setIsAxcepted: Dispatch<SetStateAction<boolean>>,
  isVolunteer?: boolean,
  isAxceptedApplication?: boolean,
  setIsAxceptedApplication?: Dispatch<SetStateAction<boolean>>,
}

const AcceptConditions = ({
  isAxcepted,
  setIsAxcepted,
  isVolunteer,
  isAxceptedApplication,
  setIsAxceptedApplication,
}: Props) => {
  const setApp = () => {
    if (setIsAxceptedApplication) {
      setIsAxceptedApplication(curr => !curr)
    }
  };

  return (
    <>
      <input
        type="checkbox"
        className={style.personalization__realInput}
        id="axcept"
      />

      <input
        type="checkbox"
        className={style.personalization__realInput}
        id="axcept1"
      />

      <div className={style.personalization__condition}>

        {isVolunteer && (
          <div className={style.personalization__wrapper}>
            <label htmlFor="axcept1" onClick={() => setApp()}>
              <div className={cn(style.personalization__buttonAxcept, {
                [style.personalization__buttonAxcept__true]: isAxceptedApplication,
              })}>
                {isAxceptedApplication && (
                  <img
                    src={axceptIcon}
                    alt="check-mark"
                    className={style.personalization__axceptedIcon} />
                )}
              </div>

            </label>

            <div className={style.personalization__agreement}>
              Даю згоду на контакт зі мною для затвердження прийняття заявки
            </div>
          </div>
        )}

        <div className={style.personalization__wrapper}>
          <label htmlFor="axcept" onClick={() => setIsAxcepted(curr => !curr)}>
            <div className={cn(style.personalization__buttonAxcept, {
              [style.personalization__buttonAxcept__true]: isAxcepted,
            })}>
              {isAxcepted && (
                <img
                  src={axceptIcon}
                  alt="check-mark"
                  className={style.personalization__axceptedIcon}
                />
              )}
            </div>
          </label>

          <div className={style.personalization__agreement}>Погоджуюся з&nbsp;
            <span className={style.personalization__agreement__confidential}>
              Правилами спільноти
            </span>

            &nbsp;та&nbsp;

            <span className={style.personalization__agreement__confidential}>
              Політикою конфіденційності
            </span>
          </div>

        </div>

      </div>
    </>
  );
};

export default AcceptConditions;
