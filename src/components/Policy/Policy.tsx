import stylePolicy from './Policy.module.scss';

const Policy = () => {
  return (
    <>
      <div className={stylePolicy.policy}>
        <div>
          <div>
            <div className={stylePolicy.policy__copyright}>Усі права зарезервовані</div>
            <div className={stylePolicy.policy__year}>RAZOM! 2026</div>
          </div>
          <a href="#" className={stylePolicy.policy__link}>
            Політика<br />конфіденційності
          </a>
        </div>
      </div>
    </>
  );
};

export default Policy;
