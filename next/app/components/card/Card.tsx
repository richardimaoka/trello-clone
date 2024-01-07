import styles from "./Card.module.css";
import { CardContents } from "./contents/CardContents";
import { CardControls } from "./controls/CardControls";
import { CardTitle } from "./title/CardTitle";

interface Props {
  title: string;
}

export function Card(props: Props) {
  return (
    <div className={styles.component}>
      <CardTitle title={props.title} />
      <div className={styles.body}>
        <div>
          <CardContents />
        </div>
        <div>
          <CardControls />
        </div>
      </div>
    </div>
  );
}
