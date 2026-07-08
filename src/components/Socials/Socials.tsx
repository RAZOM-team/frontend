import styleSocials from './Socials.module.scss';
import instagramIcon from '../../assets/icons/instagram-icon.svg';

const Socials = () => {
  return (
    <>
      <div className={styleSocials.socials}>
        <div>
          <h3 className={styleSocials.socials__title}>Соцмережі</h3>

          <a
            href="https://www.instagram.com/razom.queer?igsh=MTN3anFpcWdrbGU2YQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styleSocials.socials__icon}
              src={instagramIcon}
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
