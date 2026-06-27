import cn from 'classnames';
import styleNavigation from './Navigation.module.scss';
import { HashLink } from 'react-router-hash-link';
import { useState, type Dispatch, type SetStateAction } from 'react';
import closeMenu from './closeMenu';
import { useTranslation } from 'react-i18next';

type Props = {
  openedMenu?: boolean;
  setIsOpenMenu?: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ openedMenu, setIsOpenMenu }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { t } = useTranslation();

  const navItems = [{
    item: t("Головна"),
    to: "/#header",
  },
  {
    item: t("Про нас"),
    to: "/#about-us",
  },
  {
    item: t("Новини"),
    to: "#",
  },
  {
    item: t("Проєкти"),
    to: "/#projects",
  },
  {
    item: t("Календар подій"),
    to: "/#calendar",
  },
  {
    item: t("Партнери"),
    to: "/#partners",
  },
  {
    item: t("Контакти"),
    to: "/contacts", // /contacts
  },
  {
    item: t("Підтримати RAZOM!"),
    to: "/getVolunteer",
  },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, itemNames: string, targetUrl: string) => {
    e.preventDefault();

    setSelectedItem(itemNames);

    console.log(selectedItem);

    setTimeout(() => {
      if (targetUrl.startsWith('#')) {
        const element = document.querySelector(targetUrl);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = targetUrl;
        closeMenu({ setIsOpenMenu });
      }
    }, 480);
  };

  return (
    <>
      <nav className={cn(styleNavigation.navigation,
        openedMenu && styleNavigation.navigation__opened,
      )}>

        <div>
          <ul className={cn(styleNavigation.navigation__list,
            openedMenu && styleNavigation.navigation__blockList
          )}>
            {navItems.map(item => {
              const isCurrentSelected = selectedItem === item.item;
              const isAnyOtherSelected = selectedItem !== null && !isCurrentSelected;

              return (
                <li onClick={() => setSelectedItem(item.item)} key={item.to} >
                  <HashLink
                    smooth
                    to={item.to}
                    onClick={(e) => {
                      setSelectedItem(item.item);
                      handleLinkClick(e, item.item, item.to);
                    }}
                    className={cn(styleNavigation.navigation__menuItem, {
                      [styleNavigation['navigation__menuItem--active']]: isCurrentSelected,
                      [styleNavigation['navigation__menuItem--dimmed']]: isAnyOtherSelected,
                    })}
                  >
                    {item.item}
                  </HashLink>
                </li>
              );
            })}

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
