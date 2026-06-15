import JoinTitle from "../JoinTitle/JoinTitle";
import LittleTitle from "../LittleTitle/LittleTitle";
import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";

const VolunteerBecoming = () => {
  return (
    <>
      <RegisterTopBar fraction={1 / 3} />

      <JoinTitle joinAs='волонтер' />

      <LittleTitle text='Розкажіть нам про свої навички' />

    </>
  );
};

export default VolunteerBecoming;
