"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface NavContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextValue>({
  isOpen: false,
  setIsOpen: () => {},
});

function NavProvider({ children }: PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export default NavProvider;

export const useNavbar = () => useContext(NavContext);
