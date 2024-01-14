import styles from "./CardWatching.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

interface Props {}

export function CardWatchingButton(props: Props) {
  return (
    <div className={styles.component}>
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
        <FontAwesomeIcon icon={faBell} fixedWidth />
      </div>
      <div>Watch</div>
    </div>
  );
}
