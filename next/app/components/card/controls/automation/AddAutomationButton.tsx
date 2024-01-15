import styles from "./AddAutomationButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export function AddAutomationButton(props: Props) {
  return (
    <button className={styles.component}>
      <div className={styles.flex}>
        <div className={styles.icon}>
          {/* 
            https://fontawesome.com/v6/docs/web/style/fixed-width
            Font Awesome icons are designed on grid and share a consistent height.
            But they vary in width depending on how wide or narrow each symbol is.
            If you prefer to work with icons that have a consistent width,
            adding fa-fw will render each icon using the same width.

            https://fontawesome.com/v6/docs/web/use-with/react/style#fixed-width
            Setting icons to use a fixed-width helps when you're trying to align icons in a vertical column.
            <FontAwesomeIcon icon="fa-solid fa-coffee" fixedWidth />
        */}
          <FontAwesomeIcon icon={faPlus} fixedWidth />
        </div>
        <div className={styles.text}>Add button</div>
      </div>
    </button>
  );
}
