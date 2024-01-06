import { CardButton } from "./CardButton";
import styles from "./Card.module.css";

import { faUser } from "@fortawesome/free-regular-svg-icons";

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
          <CardButton name={"Members"} icon={faUser} />
        </div>
      </div>
    </div>
  );
}
