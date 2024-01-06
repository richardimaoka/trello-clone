import { Button } from "./Button";
import styles from "./Card.module.css";

interface Props {
  title: string;
}

export function Card(props: Props) {
  return (
    <div className={styles.component}>
      <div>{props.title}</div>
      <div>
        <div>contents</div>
        <div>
          <Button name={"Members"} />
          <Button name={"Labels"} />
          <Button name={"Checklist"} />
          <Button name={"Dates"} />
          <Button name={"Attachment"} />
          <Button name={"Cover"} />
          <Button name={"Custom Fields"} />
        </div>
      </div>
    </div>
  );
}
