import styles from "./ShowOtherMembersButton.module.css";

interface Props {}

export function ShowOtherMembersButton(props: Props) {
  return (
    <button className={styles.component}>Show other Workspace members</button>
  );
}
