import { CardButton } from "./CardButton";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

interface Props {}

export function CardButtonChecklist(props: Props) {
  return (
    <div>
      <CardButton name="Checklist" icon={faSquareCheck} />
    </div>
  );
}
