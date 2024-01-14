import { CardActivity } from "./CardActivity";
import { CardDescription } from "./CardDescription";
import { CardNotifications } from "./CardNotifications";
import styles from "./CardContents.module.css";

interface Props {}

export function CardContents(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.notifications}>
        <CardNotifications />
      </div>

      <div className={styles.description}>
        <CardDescription />
      </div>

      <div className={styles.activity}>
        <CardActivity />
      </div>
    </div>
  );
}
