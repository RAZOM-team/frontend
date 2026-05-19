import stylesWriteEmail from './WriteEmail.module.scss';
import BlackVector from '../../assets/icons/Vector-black.svg';

const WriteEmail = () => {
  const subject = encodeURIComponent('about project RAZOM');
  const mailtoLink = `mailto:razomqueer@gmail.com?subject=${subject}`;

  return (
    <a href={mailtoLink} target='_blank' className={stylesWriteEmail.writeEmail__container}>
      <h3 className={stylesWriteEmail.writeEmail__title}>Напишіть нам імейл</h3>

      <p className={stylesWriteEmail.writeEmail__description}>Ми будемо раді отримати твої пропозиції та відповісти на питання стосовно нашої організації</p>

      <img className={stylesWriteEmail.writeEmail__icon} src={BlackVector} alt="" />
    </a>
  );
};

export default WriteEmail;
