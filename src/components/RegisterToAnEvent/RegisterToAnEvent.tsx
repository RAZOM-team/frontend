import styles from './RegisterToAnEvent.module.scss';
import CalendarOfEvents from "../CalendarOfEvents/CalendarOfEvents";
import Navigation from "../Navigation/Navigation";
import Policy from "../Policy/Policy";
import Razom from "../RAZOM/Razom";
import Socials from "../Socials/Socials";

const RegisterToAnEvent = () => {
  return (
    <>
      <div className={styles.registerToAnEvent__calendar}>
        <CalendarOfEvents />
      </div>
      <Navigation />
      <Socials />
      <Policy />

      <div>
        <Razom />
      </div>
    </>
  );
};

export default RegisterToAnEvent;
