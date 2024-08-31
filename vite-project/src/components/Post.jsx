import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Posts({ author, role, createdAt, content, author_url }) {
  const [comments, setComments] = useState([]);

  const createAtFormatted = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publisheDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Assuming there's a textarea with the id "comment-input"
    const commentInput = document.getElementById("comment-input");
    const commentContent = commentInput.value;
    commentInput.value = ""; // Clear the input field
    handleAddComment({
      id: Date.now(),
      author: author,
      content: commentContent,
    });
  };

  return (
    <article className={styles.Posts}>
      <header>
        <div className={styles.author}>
          <Avatar src={author_url} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <div>
              <span>{role}</span>
            </div>
          </div>
        </div>
        <time title={createAtFormatted} dateTime={createdAt.toISOString()}>
          {publisheDateRelativeToNow}
        </time>
      </header>
      <div className={styles.Content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleSubmitComment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" id="comment-input" />
        <footer>
          <button type="Submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}
