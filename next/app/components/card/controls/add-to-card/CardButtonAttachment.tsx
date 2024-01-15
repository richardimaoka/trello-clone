import { CardButton } from "./CardButton";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export function CardButtonAttachment(props: Props) {
  return <CardButton name="Attachment" icon={faPaperclip} />;
}
