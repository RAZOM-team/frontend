import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Personalization from './components/Personalization/Personalization';
import RegistrationSuccess from './components/RegistrationSuccess/RegistrationSuccess';
import RegisterToAnEvent from './components/RegisterToAnEvent/RegisterToAnEvent';
import useDynamicState from './components/RegisterForm/useDynamicState';
import VolunteerPersonalization from './components/VolunteerPersonalization/VolunteerPersonalization';
import type { DataVolunteer } from './types/registration.ts';
import type { DataMember } from './types/registration.ts';
import OverviewPoject from './components/OverviewPoject/OverviewPoject.tsx';
import Contacts from './components/Contacts/Contacts.tsx';

function App() {
  const memberUser = useDynamicState<DataMember>(
    {
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        cellNumber: ''
      },
      userResponses: {
        interestsOfUser: ''
      },
    }
  );

  const volunteerUser = useDynamicState<DataVolunteer>(
    {
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        cellNumber: ''
      },
      userResponses: {
        yourHelp: '',
        freeHours: '',
        agreeWorkForFree: undefined,
      },
    }
  );

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/personalization' element={<Personalization />} />
        <Route
          path='/personalInfo'
          element={
            <RegisterForm
              joinAs='учасник'
              status={'member'}
              initialData={memberUser.userInfo}
            />} />
        <Route path='/registration-success' element={<RegistrationSuccess />} />
        <Route path='/calendar' element={<RegisterToAnEvent />} />
        <Route
          path='/getVolunteer'
          element={
            <RegisterForm
              joinAs='волонтер'
              status={'volunteer'}
              initialData={volunteerUser.userInfo}
            />} />
        <Route
          path='/volunteerPersonalization'
          element={
            <VolunteerPersonalization
              initialResponse={volunteerUser.userResponses}
            />} />
        
        <Route path='/overviewPoject' element={<OverviewPoject />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App
