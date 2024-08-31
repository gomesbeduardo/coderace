const mongoose = require("mongoose");

const QuestaoSchema = mongoose.Schema({
    enunciado: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true
    },
    alternativas: {
        type: [String],
        requidef: true
    },
    capitulo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Capitulo",
        required: true
    }
});

module.exports = mongoose.model("questao", QuestaoSchema);