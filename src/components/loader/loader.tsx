import RefreshICon from "../../images//refresh.svg";
import styles from "./loader.module.scss";

const Loader = () => {
  return ( <div className={styles.loader}>
    <RefreshICon />
  </div> );
}

export default Loader;
