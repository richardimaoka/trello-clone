import styles from "./CardTitle.module.css";

interface Props {
  title: string;
}

export function CardTitle(props: Props) {
  return <div className={styles.component}>{props.title}</div>;
}
