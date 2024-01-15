import styles from "./AutomationControls.module.css";

import { AutomationButton, AutomationButtonProps } from "./AutomationButton";
import { AddAutomationButton } from "./AddAutomationButton";

interface Props {
  buttons: AutomationButtonProps[];
}

export function AutomationControls(props: Props) {
  return (
    <div>
      <div className={styles.title}>Automation</div>
      <div className={styles.buttons}>
        {props.buttons.map((b) => (
          <AutomationButton key={b.name} name={b.name} />
        ))}
      </div>
      <AddAutomationButton />
    </div>
  );
}
