import { CardButton } from "./CardButton";
import { faClock } from "@fortawesome/free-regular-svg-icons";

interface Props {}

export function CardButtonDates(props: Props) {
  return (
    <div>
      <CardButton name="Dates" icon={faClock} />
    </div>
  );
}
