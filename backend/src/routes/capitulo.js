const express = require("express");
const Capitulo = require("../modules/Capitulo");
const Livro = require("../modules/Livro");

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { titulo, conteudo, livroId } = req.body;

        if (!livroId) {
            return res.status(400).json({ error: "O ID do livro é obrigatório." });
        }

        const novoCapitulo = await Capitulo.create({ titulo, conteudo, livro: livroId });

        // Adiciona o capítulo ao livro correspondente
        await Livro.findByIdAndUpdate(livroId, { $push: { capitulo: novoCapitulo._id } });
        
        res.status(201).json(novoCapitulo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    const capitulo = await Capitulo.find().populate("questoes");

    res.send(capitulo);
});

module.exports = router;