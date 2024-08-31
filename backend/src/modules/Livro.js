const mongoose = require("mongoose");

const LivroSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    capitulo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Capitulo"
    }]
})

module.exports = mongoose.model("Livro", LivroSchema);