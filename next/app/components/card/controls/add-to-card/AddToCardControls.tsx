import styles from "./AddToCardControls.module.css";

import { CardButtonAttachment } from "./CardButtonAttachment";
import { CardButtonChecklist } from "./CardButtonChecklist";
import { CardButtonCover } from "./CardButtonCover";
import { CardButtonCustomFields } from "./CardButtonCustomFields";
import { CardButtonDates } from "./CardButtonDates";
import { CardButtonLabels } from "./CardButtonLabels";
import { CardButtonMembers } from "./CardButtonMembers";

interface Props {}

export function AddToCardControls(props: Props) {
  return (
    <div>
      <div className={styles.title}>Add to card</div>
      <div className={styles.buttons}>
        <CardButtonMembers />
        <CardButtonLabels />
        <CardButtonChecklist />
        <CardButtonDates />
        <CardButtonAttachment />
        <CardButtonCover />
        <CardButtonCustomFields />
      </div>
    </div>
  );
}
