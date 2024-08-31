const mongoose = require("mongoose");

const CapituloSchema = mongoose.Schema({ //Criando o modelo de capitulo
    titulo: { //Criando a propriedade string sendo requerida
        type: String, 
        required: true
    },
    conteudo: { //Criando o conteudo para 
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