import { useMemo } from 'react';
import styles from './FurtherButton.module.scss';
import cn from 'classnames';

type Props = {
  disabled?: boolean;
  isClicked?: boolean;
  pathPart?: string;
  content?: string;
  form?: string;
}

const FurtherButton = ({
  pathPart,
  disabled,
  isClicked = false,
  content,
  form
}: Props) => {
  const inscription = useMemo(() => {
    if (content) {
      return content;
    }

    return pathPart === '' ? 'На головну сторінку' : 'Далі';
  }, [pathPart, content])

  return (
    <>
      <button
        type="submit"
        form={form || undefined}
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
