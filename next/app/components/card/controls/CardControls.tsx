import { AddToCardControls } from "./add-to-card/AddToCardControls";

interface Props {}

export function CardControls(props: Props) {
  return (
    <div>
      <AddToCardControls />
      <div>Power-Ups</div>
      <div>+Add Power-Ups</div>

      <div>Automation</div>
      <div>+Add button</div>

      <div>Actions</div>
      <div>Move</div>
    </div>
  );
}
