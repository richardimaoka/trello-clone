import { CardButton } from "./CardButton";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export function CardButtonCustomFields(props: Props) {
  return <CardButton name="Custom Fields" icon={faToolbox} />;
}
