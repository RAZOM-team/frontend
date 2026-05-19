import styleNavigation from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <nav className={styleNavigation.navigation}>

        <div>
          <ul className={styleNavigation.navigation__list}>
            <li>
              <a href="#">Головна</a></li>
            <li>
              <a href="#">Про нас</a></li>
            <li>
              <a href="#">Новини</a></li>
            <li>
              <a href="#">Проєкти</a></li>
            <li>
              <a href="">Календар подій</a>
            </li>
            <li>
              <a href="#">Партнери</a></li>
            <li>
              <a href="#">Контакти</a></li>
            <li>
              <a href="#">Підтримати RAZOM!</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
