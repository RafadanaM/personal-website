import styles from "./Menu.module.css";

interface IMenu {
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
}

const Menu = ({ onClick, open }: IMenu) => {
  return (
    <div className={`${styles.menu}`}>
      <input onChange={onClick} checked={open} type="checkbox" />
      <span />
      <span />
      <span />
    </div>
  );
};

export default Menu;
