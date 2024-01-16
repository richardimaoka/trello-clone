import styles from "./MemberListItem.module.css";

import Image from "next/image";

interface Props {}

export function MemberListItem(props: Props) {
  return (
    <div className={styles.component}>
      <Image
        className={styles.image}
        src={"/images/richardimaoka.png"}
        alt={""}
        width={30}
        height={30}
      />
      <div className={styles.name}>richard imaoka</div>
    </div>
  );
}
