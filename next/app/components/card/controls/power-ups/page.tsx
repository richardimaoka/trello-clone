import { PowerUpControls } from "./PowerUpControls";

const buttons = [{ name: "Slack" }];

// TODO: remove this
export default function Page() {
  return (
    <div
      style={{
        backgroundColor: "#091E420F",
        width: "300px",
      }}
    >
      <PowerUpControls buttons={buttons} />
    </div>
  );
}
