import type { SetStateAction } from "react";
import type { UserInfo } from "../../../types/registration";
import type { ErrorType } from "../../RegisterForm/RegisterForm";
import InputCopm from "../InputCopm/InputCopm";
import cn from 'classnames';
import styles from './LabelComp.module.scss';
import iconError from '../../assets/icons/error-icon.svg';
import iconConfirmed from '../../assets/icons/green-axcepted.svg';

type Props = {
  content: string;
  value: string;
  placeholder: string;
  name: string;
  userData: UserInfo,
  setUserData: (value: SetStateAction<UserInfo>) => void;
  errorData: ErrorType;
  setErrorData: (value: SetStateAction<ErrorType>) => void;
}

const LabelComp = ({
  content,
  value,
  placeholder,
  name,
  userData,
  setUserData,
  errorData,
  setErrorData,
}: Props) => {
  return (
    <>
      <label>
        {content}

        <InputCopm
          value={value}
          placeholder={placeholder}
          name={name}
          userData={userData}
          setUserData={setUserData}
          errorData={errorData}
          setErrorData={setErrorData}
        />

        <div className={cn(styles.registerForm__confirmData, {
          [styles.registerForm__confirmed]: errorData.firstName === 'Confirmed',
        })}>
          <img src={iconConfirmed} alt="" className={styles.registerForm__iconConfirmed} />

          Confirmed
        </div>

        <div className={cn(styles.registerForm__errorOfEmail, {
          [styles.registerForm__isError]:
            !!errorData.firstName && errorData.firstName !== 'Confirmed',
        })}>
          <img src={iconError} alt="" className={styles.registerForm__errorIcon} />

          {errorData.firstName}
        </div>
      </label>
    </>
  );
};

export default LabelComp;
