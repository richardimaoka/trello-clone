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
      <div>Add to card</div>
      <CardButtonMembers />
      <CardButtonLabels />
      <CardButtonChecklist />
      <CardButtonDates />
      <CardButtonAttachment />
      <CardButtonCover />
      <CardButtonCustomFields />
    </div>
  );
}
