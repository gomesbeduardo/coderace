const mongoose = require("mongoose");

const CapituloSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    questoes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "questao"
    }],
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Livro",
        required: true,
    }
});

module.exports = mongoose.model("Capitulo", CapituloSchema);