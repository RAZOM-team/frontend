import styles from './FurtherButton.module.scss';
import cn from 'classnames';

type Props = {
  disabled?: boolean;
  pathPart: string;
}

const FurtherButton = ({
  pathPart,
  disabled = false,
}: Props) => {
  const inscription = pathPart === '' ? 'На головну сторінку' : 'Далі';

  console.log(`${disabled} -- disabled`);
  
  return (
    <>
      {/* <Link to={`/${pathPart}`} className={cn({
        [styles.further__disabled]: !disabled,
      })}>
      </Link> */}

        <button
          type="submit"
          // disabled={!disabled}
          onClick={() => {}}
          className={cn(styles.further__button, {
            [styles.further__buttonGoToMainPage]: pathPart === '',
          })}>
          {inscription}
        </button>
    </>
  );
};

export default FurtherButton;
