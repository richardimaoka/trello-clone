import { CardButton } from "./CardButton";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export function CardButtonCustomFields(props: Props) {
  return (
    <div>
      <CardButton name="Custom Fields" icon={faToolbox} />
    </div>
  );
}
