"use client";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { CardButton } from "./CardButton";
import styles from "./CardButtonMembers.module.css";
import { MembersPopUp } from "./popup/MembersPopUp";

interface Props {}

export function CardButtonMembers(props: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={styles.component}>
      <CardButton
        name="Members"
        icon={faUser}
        onClick={() => {
          setPressed(!pressed);
        }}
      />
      {pressed && (
        <div className={styles.popup}>
          <MembersPopUp />
        </div>
      )}
    </div>
  );
}
