import cn from 'classnames';
import styleNavigation from './Navigation.module.scss';
import { HashLink } from 'react-router-hash-link';

type Props = {
  openedMenu?: boolean;
}

const Navigation = ({ openedMenu }: Props) => {
  return (
    <>
      <nav className={cn(styleNavigation.navigation,
        openedMenu && styleNavigation.navigation__opened,
      )}>

        <div>
          <ul className={cn(styleNavigation.navigation__list,
            openedMenu && styleNavigation.navigation__blockList
          )}>
            <li>
              <HashLink smooth to="/#header">Головна</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about-us">Про нас</HashLink>
            </li>
            <li>
              <HashLink smooth to="#">Новини</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects">Проєкти</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#calendar">Календар подій</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#partners">Партнери</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contacts">Контакти</HashLink>
            </li>
            <li>
              <HashLink smooth to="#">Підтримати RAZOM!</HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
