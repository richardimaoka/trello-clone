import styles from "./Card.module.css";
import { CardTitle } from "./title/CardTitle";
import { CardButtonAttachment } from "./controls/CardButtonAttachment";
import { CardButtonChecklist } from "./controls/CardButtonChecklist";
import { CardButtonCover } from "./controls/CardButtonCover";
import { CardButtonCustomFields } from "./controls/CardButtonCustomFields";
import { CardButtonDates } from "./controls/CardButtonDates";
import { CardButtonLabels } from "./controls/CardButtonLabels";

import { CardButtonMembers } from "./controls/CardButtonMembers";

interface Props {
  title: string;
}

export function Card(props: Props) {
  return (
    <div className={styles.component}>
      <CardTitle title={props.title} />
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
