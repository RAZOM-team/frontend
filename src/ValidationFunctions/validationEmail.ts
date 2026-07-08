import type { UserInfo } from "../App";
import type { ErrorType } from "../components/RegisterForm/RegisterForm";

const validationEmail = (
  userData: UserInfo | string,
  errors: ErrorType,
) => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (typeof userData === 'string') {
    const cleanedEmail1 = userData.trim().toLowerCase();

    if (userData.trim().length === 0) {
      errors.email = 'Вкажіть ваш імейл, будь ласка';
    } else if (!emailRegex.test(cleanedEmail1)) {
      errors.email = 'Вкажіть імейл формату "example@gmail.com"';
    } else {
      errors.email = 'Confirmed';
    }

    return;
  }

  const cleanedEmail = userData.email.trim().toLowerCase();

  if (userData.email.trim().length === 0) {
    errors.email = 'Вкажіть ваш імейл, будь ласка';
  } else if (!emailRegex.test(cleanedEmail)) {
    errors.email = 'Вкажіть імейл формату "example@gmail.com"';
  } else {
    errors.email = 'Confirmed';
  }
};

export default validationEmail;
