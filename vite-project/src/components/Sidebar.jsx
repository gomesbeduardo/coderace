import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <img
        className={styles.Cover}
        src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile Cover"
      />
      <div className={styles.Profile}>
        <Avatar
          src="https://github.com/gomesbeduardo.png"
          alt="Profile Avatar"
        />
        <strong>Eduardo Gomes</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#" aria-label="Edit Profile">
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
