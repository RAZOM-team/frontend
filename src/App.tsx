import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Personalization from './components/Personalization/Personalization';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/personalization' element={<Personalization />} />
        <Route path='/personalInfo' element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App
