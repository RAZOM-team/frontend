import style from './LittleTitle.module.scss';

type Props = {
  text: string;
};

const LittleTitle = ({ text }: Props) => {
  return (
    <>
      <div className={style.littleTitle}>{text}</div>
    </>
  );
};

export default LittleTitle;
