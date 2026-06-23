import type { Dispatch, SetStateAction } from "react";

interface Props {
  setIsOpenMenu?: Dispatch<SetStateAction<boolean>>;
}

const closeMenu = ({setIsOpenMenu}: Props) => {
  if (setIsOpenMenu) {
    setIsOpenMenu(false)
  }
};

export default closeMenu;
