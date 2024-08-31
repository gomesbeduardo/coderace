import { ThumbsUp, TrashSimple } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ comment, onDeleteComment }) {
  return (
    <div className={styles.Comment}>
      <Avatar hasBorder={false} src="https://github.com/gomesbeduardo.png" />
      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.author}</strong>
              <time title="20 de Maio ás 06:22h" dateTime="2024-05-20">
                Cerca de 2h atrás
              </time>
            </div>
            <button
              title="Deletar Comentário"
              onClick={() => onDeleteComment(comment.id)}
            >
              <TrashSimple size={20} />
            </button>
          </header>
          <p>{comment.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>321</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
