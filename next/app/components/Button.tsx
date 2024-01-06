import styles from "./Button.module.css";

interface Props {
  name: string;
}

export function Button(props: Props) {
  return (
    <div className={styles.component}>
      <div>i</div>
      <div>{props.name}</div>
    </div>
  );
}
