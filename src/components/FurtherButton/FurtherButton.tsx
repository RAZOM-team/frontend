import { Link } from "react-router-dom";
import styles from './FurtherButton.module.scss';
import cn from 'classnames';

type Props = {
  pathPart: string;
}

const FurtherButton = ({ pathPart }: Props) => {
  const inscription = pathPart === '' ? 'На головну сторінку' : 'Далі';

  return (
    <>
      <Link to={`/${pathPart}`}>
        <button className={cn(styles.further__button, {
          [styles.further__buttonGoToMainPage]: pathPart === '',
        })}>
          {inscription}
        </button>
      </Link>
    </>
  );
};

export default FurtherButton;
