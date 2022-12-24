import TextAnimation from "../TextAnimation/TextAnimation";
interface ITitle {
  text: string;
  vertical?: boolean;
  animate?: boolean;
}
const Title = ({ text, vertical = false, animate = true }: ITitle) => {
  return (
    <TextAnimation
      inDelay={500}
      animate={animate}
      text={text}
      vertical={vertical}
      wrap={(children) => (
        <h2 className={`fs-title fw-bold ${vertical ? "vertical" : ""}`}>
          {children}
        </h2>
      )}
    />
  );
};

export default Title;
