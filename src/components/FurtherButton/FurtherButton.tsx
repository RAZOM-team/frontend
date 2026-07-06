import styles from './FurtherButton.module.scss';
import cn from 'classnames';

type Props = {
  disabled?: boolean;
  isClicked?: boolean
  pathPart: string;
}

const FurtherButton = ({
  pathPart,
  disabled,
  isClicked = false,
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
        onClick={() => { }}
        className={cn(styles.further__button, {
          [styles.further__buttonGoToMainPage]: pathPart === '',
          [styles['further__button--unDisabled']]: disabled,
          [styles['further__button--clicked']]: isClicked,
        })}>
        {inscription}
      </button>
    </>
  );
};

export default FurtherButton;
