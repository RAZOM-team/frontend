import { useState } from "react";
import FurtherButton from "../FurtherButton/FurtherButton";
import JoinTitle from "../JoinTitle/JoinTitle";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import style from "./Personalization.module.scss";
import cn from 'classnames';
import axceptIcon from '../../assets/icons/axcepted.svg';

const Personalization = () => {
  const [isAxcepted, setIsAxcepted] = useState(false);

  console.log(isAxcepted);

  return (
    <>
      <div className={style.personalization}>
        <RegisterTopBar fraction={81} />
        <JoinTitle />

        <div className={style.personalization__littleTitle}>Персоналізуємо пропозиції для вас</div>

        <form className={style.personalization__form}>
          <label className={style.personalization__label}>
            Що вас цікавить у нашій організації найбільше?
            <input
              type="text"
              placeholder="Наприклад, тематичні івенти"
              className={style.personalization__input}
            />
          </label>
        </form>

        <input
          type="checkbox"
          className={style.personalization__realInput}
          id="axcept"
        />

        <div className={style.personalization__condition}>

          <label htmlFor="axcept" onClick={() => setIsAxcepted(curr => !curr)}>
            <div className={cn(style.personalization__buttonAxcept, {
              [style.personalization__buttonAxcept__true]: isAxcepted,
            })}>{isAxcepted && (
              <img
                src={axceptIcon}
                alt=""
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

        <FurtherButton pathPart='registration-success' />
      </div>
    </>
  );
};

export default Personalization;
