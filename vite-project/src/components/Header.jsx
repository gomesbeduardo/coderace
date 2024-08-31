import styles from "./Header.module.css";

import igniteLogo from "../assets/images/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
