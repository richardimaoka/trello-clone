import styles from "./CardDescription.module.css";
import { EditButton } from "./EditButton";

interface Props {}

export function CardDescription(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.side}>-</div>

      <div className={styles.body}>
        <div className={styles.header}>
          <div>Description</div>
          <div>
            <EditButton />
          </div>
        </div>

        <p>https://l-tike.com/event/mevent/?mid=706609</p>
      </div>
    </div>
  );
}
