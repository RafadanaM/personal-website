"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react";

interface CarouselContextValue<T = unknown> {
  items: (T & { id: string })[];
}

interface CarouselContextAction {
  nextPage: () => void;
  prevPage: () => void;
}

const CarouseValueContext = createContext<CarouselContextValue>({
  items: [],
});

const CarouselActionContext = createContext<CarouselContextAction>({
  nextPage: () => {},
  prevPage: () => {},
});

interface Props<T> {
  items: (T & { id: string })[];
}
export function CarouselProvider<T>({
  items,
  children,
}: PropsWithChildren<Props<T>>) {
  const nextPage = useCallback(() => {}, []);
  const prevPage = useCallback(() => {}, []);

  const actionsMemo = useMemo(() => {
    return {
      nextPage,
      prevPage,
    };
  }, [nextPage, prevPage]);

  const valueMemo = useMemo(() => {
    return {
      items,
    };
  }, [items]);

  return (
    <CarouselActionContext.Provider value={actionsMemo}>
      <CarouseValueContext.Provider value={valueMemo}>
        {children}
      </CarouseValueContext.Provider>
    </CarouselActionContext.Provider>
  );
}

export const useCarouselValue = () => useContext(CarouseValueContext);

export const useCarouseAction = () => useContext(CarouselActionContext);

export default function Carousel() {
  return;
}
