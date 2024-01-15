import { CardButton } from "./CardButton";
import { faTag } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export function CardButtonLabels(props: Props) {
  return <CardButton name="Labels" icon={faTag} />;
}
