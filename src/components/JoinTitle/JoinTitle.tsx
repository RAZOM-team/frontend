import styles from './JoinTitle.module.scss';

type Props = {
  joinAs: string,
};

const JoinTitle = ({ joinAs }: Props) => {
  return (<h2 className={styles.joinTitle__title}>Приєднатися як<br /> {joinAs}</h2>);
};

export default JoinTitle;
