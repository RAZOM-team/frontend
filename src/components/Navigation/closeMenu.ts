import type { Dispatch, SetStateAction } from "react";

interface Props {
  setIsOpenMenu?: Dispatch<SetStateAction<boolean>>;
}

async function closeMenu({setIsOpenMenu}: Props) {
  if (setIsOpenMenu) {
    setTimeout(() => {
      setIsOpenMenu(false);
    }, 100);
  }
};

export default closeMenu;
