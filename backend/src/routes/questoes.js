const express = require("express");
const Questao = require("../modules/Questao");
const Capitulo = require("../modules/Capitulo");
const router = express.Router();


router.post("/add", async (req, res) => {
    try {
        const { enunciado, resposta, alternativas, capituloId } = req.body

        if(!enunciado || !resposta || !alternativas || !capituloId) {
            return res.status(500).json({ error: "Dados inválidos" });
        }
    
        const novaQuestao = await Questao.create({
            enunciado,
            resposta,
            alternativas,
            capitulo: capituloId
        });
    
        await Capitulo.findByIdAndUpdate({ _id: capituloId }, { $push: { questoes: novaQuestao._id } });
    
        res.status(201).json(novaQuestao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;