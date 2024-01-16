import styles from "./MemberList.module.css";
import { MemberListItem } from "./MemberListItem";

interface Props {}

export function MemberList(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.title}>Board members</div>
      <div className={styles.items}>
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
      </div>
    </div>
  );
}
