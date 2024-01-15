import { CardButton } from "./CardButton";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

interface Props {}

export function CardButtonChecklist(props: Props) {
  return <CardButton name="Checklist" icon={faSquareCheck} />;
}
