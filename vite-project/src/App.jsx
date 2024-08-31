<<<<<<< HEAD
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Posts } from "./components/Post";

const posts = [
  {
    id: 1,
    author: "gomesbeduardo",
    author_url: "http://github.com/gomesbeduardo.png",
    role: "Web Developer",
    content: [
      {
        type: "paragraph",
        content:
          "Olá, tudo bem? Vim aqui falar da minha participação no coderace 2024! Um hackathon de 12h de duração e com diversos prêmios.",
      },
      { type: "paragraph", content: "Foi simplesmente fantástico!" },
    ],
    createdAt: new Date(),
    likes: 10,
    comments: [
      {
        id: 1,
        author: "joaozinho",
        content: "Eu também!",
        createdAt: new Date("2024-08-30 22:00:00"),
      },
      {
        id: 2,
        author: "mariazinha",
        content: "Quero ver mais!",
        createdAt: new Date("2024-08-30 22:01:30"),
      },
    ],
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Posts
                author={post.author}
                content={post.content}
                published={post.published}
                key={post.id}
                {...post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
=======
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import {Pages} from "./components/Pages";

function App() {
  return (
    <>
      <Header/>
      <Pages/>
    </>
  )
}

export default App
>>>>>>> 41c38b901c930083396a61db64e88867dc5e3789
