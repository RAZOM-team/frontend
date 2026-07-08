import type { SetStateAction } from "react";
import type { UserInfo } from "../../../App";
import type { ErrorType } from "../../RegisterForm/RegisterForm";
import validData from "../../RegisterForm/validData";

type Props = {
  value: string;
  placeholder: string;
  name: string;
  userData: UserInfo;
  setUserData: (value: SetStateAction<UserInfo>) => void;
  errorData: ErrorType;
  setErrorData: (value: SetStateAction<ErrorType>) => void;
}

const InputCopm = ({
  value,
  placeholder,
  name,
  userData,
  setUserData,
  setErrorData,
}: Props) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}

        onChange={(e) => {
          setUserData(prev => {
            const updatedState = {
              ...prev,
              firstName: e.target.value
            };

            sessionStorage.setItem('register_user_data', JSON.stringify(updatedState));

            return updatedState;
          });
        }}

        onBlur={() => {
          const isValid = validData(userData);

          setErrorData(cur => {
            return {
              ...cur,
              firstName: isValid.firstName,
            }
          });
        }}
      />
    </>
  );
};

export default InputCopm;
