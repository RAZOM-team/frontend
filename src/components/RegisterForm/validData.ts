import type { UserInfo } from "../../App";
import type { ErrorType } from "./RegisterForm";

const validData = (
  userData: UserInfo,
  // setUserData: (value: SetStateAction<UserInfo>) => void,
  // setErrorData: Dispatch<SetStateAction<ErrorType>>,
) => {

  const errors: ErrorType = {
    firstName: '',
    secondName: '',
    email: '',
    number: '',
  };

  if (userData.firstName.length < 2) {
    console.log(userData.firstName.length);

    errors.firstName = 'Ім’я повинно містити не менше 2 символів';
  } else {
    errors.firstName = '';
  }

  if (userData.lastName.length < 2) {

    errors.secondName = 'Прізвище повинно містити не менше 2 символів';
  } else {
    errors.secondName = '';
  }

  const cleanedEmail = userData.email.trim().toLowerCase();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (userData.email.trim().length === 0) {
    errors.email = 'Вкажіть ваш імейл, будь ласка';
  } else if (!emailRegex.test(cleanedEmail)) {

    errors.email = 'Вкажіть імейл формату "example@gmail.com"';
  } else {
    errors.email = '';
  }

  const cleanedPhone = userData.cellNumber.replace(/[\s\-()]/g, '');

  const finalPhone = cleanedPhone.length > 0 && !cleanedPhone.startsWith('+')
    ? '+' + cleanedPhone
    : cleanedPhone;

  const strictInternationalPhoneRegex = /^\+[1-9]\d{6,14}$/;

  if (userData.cellNumber.trim().length === 0) {

    errors.number = 'Вкажіть ваш номер телефону, будь ласка';
  } else if (!strictInternationalPhoneRegex.test(finalPhone)) {

    errors.number = 'Некоректний формат. Номер має містити код країни та від 7 до 15 цифр';
  } else {
    errors.number = '';
  }

  return errors;
};

export default validData;
