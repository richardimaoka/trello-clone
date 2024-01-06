import styles from "./CardButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface Props {
  name: string;
  icon: IconDefinition;
}

export function CardButton(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div>{props.name}</div>
    </div>
  );
}
