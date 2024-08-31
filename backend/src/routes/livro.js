const express = require("express");
const Livro = require("../modules/Livro");

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { nome } = req.body;

        const novoLivro = await Livro.create({ nome });

        // Retornando a resposta com o livro criado
        res.status(201).json(novoLivro);
    } catch (error) {
        // Tratando erros de forma adequada
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    const livro = await Livro.find().populate({
        path: "capitulo",
        populate: {
            path: "questoes"
        }
    });

    res.send(livro);
});

module.exports = router;
