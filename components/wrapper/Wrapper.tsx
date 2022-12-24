interface IWrapper {
  wrap?: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}

const Wrapper = ({ wrap, children }: IWrapper) => {
  return wrap ? wrap(children) : <>{children} </>;
};

export default Wrapper;
