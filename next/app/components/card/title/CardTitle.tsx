import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CardTitle.module.css";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
interface Props {
  title: string;
}

export function CardTitle(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <FontAwesomeIcon icon={faWindowMaximize} fixedWidth />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.right}>x</div>
    </div>
  );
}
