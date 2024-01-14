import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { CardButton } from "./CardButton";
import styles from "./CardNotifications.module.css";

interface Props {}

export function CardNotifications(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.title}>Notifications</div>
      <div className={styles.button}>
        <CardButton name="Watching" icon={faWindowMaximize} />
      </div>
    </div>
  );
}
