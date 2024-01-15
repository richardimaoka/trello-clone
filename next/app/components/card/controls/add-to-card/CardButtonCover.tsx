import { CardButton } from "./CardButton";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export function CardButtonCover(props: Props) {
  return <CardButton name="Cover" icon={faBoxArchive} />;
}
