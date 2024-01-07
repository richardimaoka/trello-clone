import styles from "./Card.module.css";
import { CardButtonAttachment } from "./CardButtonAttachment";
import { CardButtonChecklist } from "./CardButtonChecklist";
import { CardButtonCover } from "./CardButtonCover";
import { CardButtonCustomFields } from "./CardButtonCustomFields";
import { CardButtonDates } from "./CardButtonDates";
import { CardButtonLabels } from "./CardButtonLabels";

import { CardButtonMembers } from "./CardButtonMembers";

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
          <CardButtonMembers />
          <CardButtonLabels />
          <CardButtonChecklist />
          <CardButtonDates />
          <CardButtonAttachment />
          <CardButtonCover />
          <CardButtonCustomFields />
        </div>
      </div>
    </div>
  );
}
