import Image from "next/image";
import styles from "./MembersPopUp.module.css";

interface Props {}

export function MembersPopUp(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <div className={styles.titletext}>Members</div>
        <button className={styles.close}>x</button>
      </div>

      <input
        className={styles.searchbox}
        type="text"
        placeholder="Search members"
      />

      <div>
        <div>Board members</div>
        <Image
          src={"/images/richardimaoka.png"}
          alt={""}
          width={48}
          height={48}
        />
        <div>richard imaoka</div>
      </div>

      <button>show otehr workspace members</button>
    </div>
  );
}
