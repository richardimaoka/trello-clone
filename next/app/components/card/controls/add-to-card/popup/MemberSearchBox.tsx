import styles from "./MemberSearchBox.module.css";

interface Props {}

export function MemberSearchBox(props: Props) {
  return (
    <input
      className={styles.component}
      type="text"
      placeholder="Search members"
    />
  );
}
