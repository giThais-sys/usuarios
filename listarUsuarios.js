let usuarios= require ('./usuarios')
function listarUsuarios(usuarios) {
 usuarios.forEach((usuario)=> {
 console.log(`${usuario.id} nome: ${usuario.nome}, rua: ${usuario.email}, telefone: ${usuario.telefone}`)
   });
   
}
module.exports= listarUsuarios
