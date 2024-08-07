let usuarios= require ('./usuarios')

function adicionarUsuarios(usuario) {
   usuario.id= usuarios.length +1;
   usuarios.push(usuario)
    console.log('usuario cadastrado com sucesso!')
}
module.exports= adicionarUsuarios
