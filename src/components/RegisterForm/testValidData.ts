import type { Dispatch, SetStateAction } from "react";
import type { UserInfo } from "../../App";
import type { ErrorType } from "./RegisterForm";

const validateFirstName = (
  userData: UserInfo,
  setErrorData: Dispatch<SetStateAction<ErrorType>>,
  isValid: boolean
) => {
  if (userData.firstName.length < 2) {
    isValid = false;

    setErrorData(obj => {
      return {
        ...obj,
        firstName: 'Ім’я повинно містити не менше 2 символів',
      }
    });
  } else {
    setErrorData(obj => {
      return {
        ...obj,
        firstName: '',
      }
    });
  }

  return isValid;
};

const validateLastName = (
  userData: UserInfo,
  setErrorData: Dispatch<SetStateAction<ErrorType>>,
  isValid: boolean
) => {
  if (userData.secondName.length < 2) {
    isValid = false;

    setErrorData(obj => {
      return {
        ...obj,
        lastName: 'Прізвище повинно містити не менше 2 символів',
      }
    });
  } else {
    setErrorData(obj => {
      return {
        ...obj,
        lastName: '',
      }
    });
  }

  return isValid;
};

const validateEmail = (
  userData: UserInfo,
  setErrorData: Dispatch<SetStateAction<ErrorType>>,
  setUserData: (value: SetStateAction<UserInfo>) => void,
  isValid: boolean,
) => {
  const cleanedEmail = userData.email.trim().toLowerCase();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (userData.email.trim().length === 0) {
    isValid = false;

    setErrorData(obj => ({
      ...obj,
      email: 'Вкажіть ваш імейл, будь ласка',
    }));
  } else if (!emailRegex.test(cleanedEmail)) {
    isValid = false;
    setErrorData(obj => ({
      ...obj,
      email: 'Вкажіть коректний імейл, будь ласка',
    }));
  } else {
    setErrorData(obj => ({
      ...obj,
      email: '',
    }));
  }

  if (isValid) {
    setUserData(prev => ({
      ...prev,
      email: cleanedEmail
    }));
  }

  return isValid;
};

const validateNumber = (
  userData: UserInfo,
  setErrorData: Dispatch<SetStateAction<ErrorType>>,
  setUserData: (value: SetStateAction<UserInfo>) => void,
  isValid: boolean,
) => {
  const cleanedPhone = userData.cellNumber.replace(/[\s\-()]/g, '');

  const finalPhone = cleanedPhone.length > 0 && !cleanedPhone.startsWith('+')
    ? '+' + cleanedPhone
    : cleanedPhone;

  const strictInternationalPhoneRegex = /^\+[1-9]\d{6,14}$/;

  if (userData.cellNumber.trim().length === 0) {
    isValid = false;

    setErrorData(obj => ({
      ...obj,
      number: 'Вкажіть ваш номер телефону, будь ласка',
    }));
  } else if (!strictInternationalPhoneRegex.test(finalPhone)) {
    isValid = false;

    setErrorData(obj => ({
      ...obj,
      number: 'Некоректний формат. Номер має містити код країни та від 7 до 15 цифр',
    }));
  } else {
    setErrorData(obj => ({
      ...obj,
      number: '',
    }));
  }

  if (isValid) {
    setUserData(prev => ({
      ...prev,
      cellNumber: finalPhone
    }));
  }

  return isValid;
};

const testValidData = (
  userData: UserInfo,
  setErrorData: Dispatch<SetStateAction<ErrorType>>,
  setUserData: (value: SetStateAction<UserInfo>) => void,
) => {
  let isValid = true;

  isValid = validateFirstName(userData, setErrorData, isValid);
  
  isValid = validateLastName(userData, setErrorData, isValid);

  isValid = validateEmail(userData, setErrorData, setUserData, isValid);
  
  isValid = validateNumber(userData, setErrorData, setUserData, isValid);

  return isValid;
};

export default testValidData;
