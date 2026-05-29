import { Link } from "react-router-dom";
import styles from './FurtherButton.module.scss';

type Props = {
  pathPart: string;
}

const FurtherButton = ({ pathPart }: Props) => {
  return (
    <>
      <Link to={`/${pathPart}`}>
        <button className={styles.further__button}>
          Далі
        </button>
      </Link>
    </>
  );
};

export default FurtherButton;
