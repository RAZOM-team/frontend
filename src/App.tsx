import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Personalization from './components/Personalization/Personalization';
import RegistrationSuccess from './components/RegistrationSuccess/RegistrationSuccess';
import RegisterToAnEvent from './components/RegisterToAnEvent/RegisterToAnEvent';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/personalization' element={<Personalization />} />
        <Route path='/personalInfo' element={<RegisterForm />} />
        <Route path='/registration-success' element={<RegistrationSuccess />} />
        <Route path='/calendar' element={<RegisterToAnEvent />} />
      </Routes>
    </>
  );
}

export default App
