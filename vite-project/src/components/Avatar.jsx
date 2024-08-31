import styles from "./Avatar.module.css";

export function Avatar(props) {
  return (
    <img
      className={props.hasBorder ? styles.AvatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}
