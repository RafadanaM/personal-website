interface IWrapper<T> {
  wrap?: (element: T) => JSX.Element;
  element: T;
}

const Wrapper = <T,>({ wrap, element }: IWrapper<T>) => {
  return wrap ? wrap(element) : <>{element} </>;
};

export default Wrapper;
