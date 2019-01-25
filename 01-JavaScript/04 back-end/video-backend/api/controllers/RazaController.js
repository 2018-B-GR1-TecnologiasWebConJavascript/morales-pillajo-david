/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  holaMundo:(req,res)=>{

    return res.send('ok')
  },

  buscarPorNombre: async function(req, res){
    const parametros = req.allParams();


    var nombreCac= await Raza.find({
      nombre:{'startsWith':parametros.nombre}
    });

    return res.ok(nombreCac);
  },

  login: async (req, res)=>{
    const parametros= req.allParams();

    var usuarioLoggeado= await Raza.find({
      username: parametros.username,
      password: parametros.password,
    });

    console.log(usuarioLoggeado)

    if(usuarioLoggeado){
      return res.ok(usuarioLoggeado);
    }else {
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  }
};

