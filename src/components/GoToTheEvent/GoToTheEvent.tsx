import RegisterTopBar from '../RegisterTopBar/RegisterTopBar';
import styles from './GoToTheEvent.module.scss';

const GoToTheEvent = () => {
  return (
    <>
      <div className={styles.registerEvent}>
        <RegisterTopBar fraction={50} />

        <h1 className={styles.registerEvent__title}>Зареєструватися на подію</h1>

        <form className={styles.registerEvent__form}>
          <label className={styles.registerEvent__label}>
            <div>Імейл <span>*</span></div>

            <input
              type="email"
              placeholder="example@mail.com"
              name='email'
              className={styles.registerEvent__email}
            />
          </label>
        </form>

        <section className={styles.registerEvent__eventDescribe}>
          <div className={styles.registerEvent__name}>
            10:00, 17 квітня
          </div>

          <div className={styles.registerEvent__line}></div>

          <p className={styles.registerEvent__info}>
            Ранок починається з настільних ігор
          </p>

          <p className={styles.registerEvent__location}>
            Локація: Schildergasse 5, 50663 Düsseldorf
          </p>

          <p className={styles.registerEvent__rules}>Участь лише для учасників!</p>
        </section>
      </div>
    </>
  );
};

export default GoToTheEvent;
