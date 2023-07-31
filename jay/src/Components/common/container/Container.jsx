import Counter from "../../counter/Counter";
import styles from "./Container.module.css"
function Container() {
  return <div data-testid="common-container" className={styles.container}>{
<Counter/>
  }</div>;
}

export default Container;
