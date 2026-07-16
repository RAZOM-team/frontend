import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const useLang = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }
  return context;
};

export default useLang;
