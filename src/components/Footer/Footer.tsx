import Navigation from '../Navigation/Navigation';
import Policy from '../Policy/Policy';
import Razom from '../RAZOM/Razom';
import Socials from '../Socials/Socials';
import WriteEmail from '../WriteEmail/WriteEmail';
import stylesFooter from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={stylesFooter.footer}  id='contacts'>
        <h2 className={stylesFooter.footer__title}>Контактна форма</h2>

        <WriteEmail />
        <Navigation />
        <Socials />
        <Policy />

        <div className={stylesFooter.footer__razom}>
          <Razom />
        </div>

      </footer>
    </>
  );
};

export default Footer;
