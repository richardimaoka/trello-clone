import { AutomationControls } from "./AutomationControls";

const buttons = [
  { name: "DONE, Move the card" },
  { name: "Label too big" },
  { name: "Move to Someday board" },
];

// TODO: remove this
export default function Page() {
  return (
    <div
      style={{
        backgroundColor: "#091E420F",
        width: "150px",
      }}
    >
      <AutomationControls buttons={buttons} />
    </div>
  );
}
