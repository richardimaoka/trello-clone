import styles from "./PowerUpControls.module.css";

import { PowerUpButton, PowerUpButtonProps } from "./PowerUpButton";
import { AddPowerUpButton } from "./AddPowerUpButton";

interface Props {
  buttons: PowerUpButtonProps[];
}

export function PowerUpControls(props: Props) {
  return (
    <div>
      <div className={styles.title}>Power-Ups</div>
      <div className={styles.buttons}>
        {props.buttons.map((b) => (
          <PowerUpButton key={b.name} name={b.name} />
        ))}
      </div>
      <AddPowerUpButton />
    </div>
  );
}
