import cn from 'classnames';
import styleNavigation from './Navigation.module.scss';
import { HashLink } from 'react-router-hash-link';
import type { Dispatch, SetStateAction } from 'react';
import closeMenu from './closeMenu';

type Props = {
  openedMenu?: boolean;
  setIsOpenMenu?: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ openedMenu, setIsOpenMenu }: Props) => {

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
              <HashLink smooth to="/#header" onClick={() => closeMenu({ setIsOpenMenu })}>Головна</HashLink>
            </li>

            <li>
              <HashLink smooth to="/#about-us" onClick={() => closeMenu({ setIsOpenMenu })}>Про нас</HashLink>
            </li>
            <li>
              <HashLink smooth to="#" onClick={() => closeMenu({ setIsOpenMenu })}>Новини</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" onClick={() => closeMenu({ setIsOpenMenu })}>Проєкти</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#calendar" onClick={() => closeMenu({ setIsOpenMenu })}>Календар подій</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#partners" onClick={() => closeMenu({ setIsOpenMenu })}>Партнери</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contacts" onClick={() => closeMenu({ setIsOpenMenu })}>Контакти</HashLink>
            </li>
            <li>
              <HashLink smooth to="#" onClick={() => closeMenu({ setIsOpenMenu })}>Підтримати RAZOM!</HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
