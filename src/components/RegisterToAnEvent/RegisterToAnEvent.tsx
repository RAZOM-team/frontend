import styles from './RegisterToAnEvent.module.scss';
import CalendarOfEvents from "../CalendarOfEvents/CalendarOfEvents";
import Navigation from "../Navigation/Navigation";
import Policy from "../Policy/Policy";
import Razom from "../RAZOM/Razom";
import Socials from "../Socials/Socials";
import TopBar from '../TopBar/TopBar';

const RegisterToAnEvent = () => {
  return (
    <>
      <TopBar isBlack={true} />
      <div className={styles.registerToAnEvent__calendar}>
        <CalendarOfEvents data={[]} />
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
