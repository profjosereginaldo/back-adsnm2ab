require("dotenv").config();
const mongoose = require("mongoose");
const Produto = require("./modelo");

const url = process.env.MONGODB_URL;

async function main() {
  try {
    await mongoose.connect(url);
    console.log("Deboas!");
  } catch (err) {
    console.log("Deu ruim! ", err.message);
  }
  // Inserir produto
//   const produto = new Produto({ 
//     nome: "banana", 
//     preco: 'texto', 
//     quantidade: 5 
//     });  
//   try {
//     await produto.save();
//   } catch(err) {
//     console.log(err.errors['preco'].message);
//   }
  
// Alterar produto  
//   const produto = await Produto.findOne({nome: "banana"});
//   produto.nome = "banana nanica";
//   produto.preco = 10.0;
//   produto.quantidade = 1;
//   await produto.save();
  
  // inserir produto
  try {  
    const produtoNovo = await Produto.create({
        nome: "aaa     ", 
        preco: 31.5, 
    });
    console.log(produtoNovo);
  } catch (err) {
    for (let key in err.errors) {
        console.log(err.errors[key].message);
    }
  }

//   // atualizar produto
//   const produtoAtualizado = await Produto.findOneAndUpdate(
//     { nome: "maca"}, 
//     { nome: "maca fuji", preco: 16.0, quantidade: 2 }
//   );
//   console.log(produtoAtualizado);

//   // consultar produto
//   const produtoConsultado = await Produto.findOne({ nome: "uva" });
//   console.log(produtoConsultado);

//   // remover produto
//   const produtoRemovido = await Produto.findOneAndDelete({ nome: "uva"});
//   console.log(produtoRemovido);

  await mongoose.disconnect();
}

main();
