import { pageSections } from "../data/data";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className={`${styles.container}`}>
      {pageSections.map(({ id, section: Element }) => (
        <Element key={id} id={id} />
      ))}
    </div>
  );
}
