import stylesOurProjects from './OurProjects.module.scss';
import { Link } from 'react-router-dom';

const OurProjects = () => {
  return (
    <>
      <section className={stylesOurProjects.ourProjects}>
        <h1 className={stylesOurProjects.ourProjects__title}>Наші проєкти</h1>

        <div className={stylesOurProjects.ourProjects__deteilsWrapper}>
          <details className={stylesOurProjects.ourProjects__nameWrapper}>
            <summary className={stylesOurProjects.ourProjects__name}>Інформація <span></span></summary>
            <p className={stylesOurProjects.ourProjects__info}>
              Ми хочемо надавати актуальну інформацію про права ЛГБТКІ+, а також пропонуємо лекції, семінари
              та терапевтичні сесії, які зміцнюють нашу спільноту та допомагають краще знати свої права.
            </p>

            <Link to={'/overviewPoject'}><button className={stylesOurProjects.ourProjects__knowMore}>Дізнатися більше</button></Link>
          </details>

          <div className={stylesOurProjects.ourProjects__devideLine}></div>

          <details className={stylesOurProjects.ourProjects__nameWrapper}>
            <summary className={stylesOurProjects.ourProjects__name}>Культурні та соціальні заходи <span></span></summary>
            <p className={stylesOurProjects.ourProjects__name}>Тут буде твій прихований контент...</p>
          </details>

          <div className={stylesOurProjects.ourProjects__devideLine}></div>

          <details className={stylesOurProjects.ourProjects__nameWrapper}>
            <summary className={stylesOurProjects.ourProjects__name}>Активізм та видимість <span></span></summary>
            <p className={stylesOurProjects.ourProjects__name}>Тут буде твій прихований контент...</p>
          </details>

          <div className={stylesOurProjects.ourProjects__devideLine}></div>

          <details className={stylesOurProjects.ourProjects__nameWrapper}>
            <summary className={stylesOurProjects.ourProjects__name}>Психологічна підтримка <span></span></summary>
            <p className={stylesOurProjects.ourProjects__name}>Тут буде твій прихований контент...</p>
          </details>

          <div className={stylesOurProjects.ourProjects__devideLine}></div>

          {/* <details className={stylesOurProjects.ourProjects__nameWrapper}>
            <summary className={stylesOurProjects.ourProjects__name}>Інформація<span></span></summary>
            <p className={stylesOurProjects.ourProjects__name}>Тут буде твій прихований контент...</p>
          </details>

          <div className={stylesOurProjects.ourProjects__devideLine}></div> */}
        </div>

      </section>
    </>
  );
};

export default OurProjects;
