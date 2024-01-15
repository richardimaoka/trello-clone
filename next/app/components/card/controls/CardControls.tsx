import { AddToCardControls } from "./add-to-card/AddToCardControls";
import { AutomationControls } from "./automation/AutomationControls";
import { PowerUpControls } from "./power-ups/PowerUpControls";

interface Props {}

const powerUpsButtons = [{ name: "Slack" }];
const automationButtons = [
  { name: "DONE, Move the card" },
  { name: "Label too big" },
  { name: "Move to Someday board" },
];

export function CardControls(props: Props) {
  return (
    <div>
      <AddToCardControls />
      <PowerUpControls buttons={powerUpsButtons} />
      <AutomationControls buttons={automationButtons} />
    </div>
  );
}
