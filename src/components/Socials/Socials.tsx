import styleSocials from './Socials.module.scss';
import instagramIcon from '../../assets/icons/instagram-icon.svg';

const Socials = () => {
  return (
    <>
      <div className={styleSocials.socials}>
        <div>
          <h3 className={styleSocials.socials__title}>Соцмережі</h3>

          <a href="https://www.instagram.com/razom.for.ukraine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img className={styleSocials.socials__icon} src={instagramIcon} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
