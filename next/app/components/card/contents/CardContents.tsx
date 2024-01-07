import { CardActivity } from "./CardActivity";
import { CardDescription } from "./CardDescription";
import { CardNotifications } from "./CardNotifications";
import styles from "./CardContents.module.css";

interface Props {}

export function CardContents(props: Props) {
  return (
    <div className={styles.component}>
      <CardNotifications />
      <CardDescription />
      <CardActivity />
      <CardActivity />
    </div>
  );
}
