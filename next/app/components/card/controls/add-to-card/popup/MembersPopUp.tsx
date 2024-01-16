import { MemberList } from "./MemberList";
import { MemberListItem } from "./MemberListItem";
import { MemberSearchBox } from "./MemberSearchBox";
import styles from "./MembersPopUp.module.css";
import { MembersPopUpHeader } from "./MembersPopUpHeader";
import { ShowOtherMembersButton } from "./ShowOtherMembersButton";

interface Props {}

export function MembersPopUp(props: Props) {
  return (
    <div className={styles.component}>
      <MembersPopUpHeader />

      <MemberSearchBox />

      <MemberList />

      <ShowOtherMembersButton />
    </div>
  );
}
