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
  }
};

