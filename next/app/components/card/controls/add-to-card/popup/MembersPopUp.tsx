import { MemberList } from "./MemberList";
import { MemberListItem } from "./MemberListItem";
import { MemberSearchBox } from "./MemberSearchBox";
import styles from "./MembersPopUp.module.css";
import { MembersPopUpCloseButton } from "./MembersPopUpCloseButton";
import { MembersPopUpHeader } from "./MembersPopUpHeader";
import { ShowOtherMembersButton } from "./ShowOtherMembersButton";

interface Props {}

export function MembersPopUp(props: Props) {
  return (
    <div className={styles.component}>
      <MembersPopUpCloseButton />

      <MembersPopUpHeader />

      <MemberSearchBox />

      <MemberList />

      <ShowOtherMembersButton />
    </div>
  );
}
