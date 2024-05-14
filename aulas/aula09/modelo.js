const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    trim: true,
    unique: [true, 'Nome já cadastrado'],
    uppercase: true,
    required: [true, "Nome é obrigatório"],
    minLength: [3, "Nome deve ter no mínimo 3 caracteres"],
  },
  preco: {
    type: Number,
    required: [true, "Preco é obrigatorio"],
    min: [0, "Valor minimo do preco eh ZERO"],
  },
  quantidade: { type: Number, default: 0 },
});

module.exports = mongoose.model("Produto", produtoSchema);
