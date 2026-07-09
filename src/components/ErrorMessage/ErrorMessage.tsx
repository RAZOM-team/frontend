import styles from './ErrorMessage.module.scss';
// import cn from 'classnames';
import iconError from '../../assets/icons/error-icon.svg';

type Props = {
  error: string;
}

const ErrorMessage = ({ error }: Props) => {
  return (
    <>
      <div className={styles.personalization__errorWrapper}>
        <img src={iconError} alt="" />

        <div className={styles.personalization__error}>
          {error}
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
