import styles from "./Button.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name: string;
}

export function Button(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div>{props.name}</div>
    </div>
  );
}
