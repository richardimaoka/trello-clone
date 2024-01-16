import styles from "./MembersPopUpHeader.module.css";

interface Props {}

export function MembersPopUpHeader(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.text}>Members</div>
      <button className={styles.close}>x</button>
    </div>
  );
}
