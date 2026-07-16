import { useTranslation } from "react-i18next";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { t } = useTranslation();

const navItems = [{
    item: t("Головна"),
    to: "/#header",
  },
  {
    item: t("Про нас"),
    to: "/about-us",
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
    to: "/contacts",
  },
  {
    item: t("Підтримати RAZOM!"),
    to: "/support",
  },
];
  
export default navItems;
