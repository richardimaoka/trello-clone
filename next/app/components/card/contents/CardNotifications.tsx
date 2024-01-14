import styles from "./CardNotifications.module.css";
import { CardWatchingButton } from "./buttons/CardWatchingButton";

interface Props {}

export function CardNotifications(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.title}>Notifications</div>

      <CardWatchingButton />
    </div>
  );
}
