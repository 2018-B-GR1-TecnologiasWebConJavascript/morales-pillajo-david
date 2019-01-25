/**
 * Raza.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      required:true
    },

    mascotas:{
      collection:'Mascotas',//model hijo
      via:'idRaza'//nombre del campo
    },

    username:{
      type: 'string',
      required: true
    },

    password:{
      type:'string',
      required:true
    }
  },

};

