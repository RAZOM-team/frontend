import { useState } from "react";
import FurtherButton from "../FurtherButton/FurtherButton";
import JoinTitle from "../JoinTitle/JoinTitle";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";
import style from "./Personalization.module.scss";
import AcceptConditions from "../AcceptConditions/AcceptConditions";

const Personalization = () => {
  const [isAxcepted, setIsAxcepted] = useState(false);

  return (
    <>
      <div className={style.personalization}>
        <RegisterTopBar fraction={81} />
        <JoinTitle joinAs={'учасник'} />

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

        <AcceptConditions isAxcepted={isAxcepted} setIsAxcepted={setIsAxcepted} />

        <FurtherButton pathPart='registration-success' />
      </div>
    </>
  );
};

export default Personalization;
