import { CardButton } from "./CardButton";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface Props {}

export function CardButtonMembers(props: Props) {
  return <CardButton name="Members" icon={faUser} />;
}
