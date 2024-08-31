const express = require("express");
const connectDB = require("./src/config/database");
const RotasCapitulo = require("./src/routes/capitulo");
const RotasLivro = require("./src/routes/livro");
const RotasQuestao = require("./src/routes/questoes");
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173"
}));

app.get("/", async (req, res) => { //Rota de teste
    
});

app.use("/livros", RotasLivro);
app.use("/capitulo", RotasCapitulo);
app.use("/questao", RotasQuestao);

const PORT = 8087;

app.listen(PORT, () => {
    console.log(`Servidor rodadno na porta: http://localhost:8087`);
});