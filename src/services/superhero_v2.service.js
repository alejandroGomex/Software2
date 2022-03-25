const superheroModel = require('../models/superhero_v2.model')
class SuperheroService {
  /* Promesas y funciones asincronicas
    una funcion asincronica devuelve una promesa
    js es un lenguaje que ejecuta un hilo->solo hace una cosa a la vez
  */
  async createSuperhero(superheroV2) {
    superheroV2.save();
    return superheroV2;
  }
  async listSuperhero() {
    return superheroModel.find();
  }
  async ShowSuperhero(superheroId) {
    return superheroModel.findById({
      _id: superheroId
    });

  }
  async editSuperhero(superheroId, superhero, realname, superpower) {
    return superheroModel.findById({
      _id: superheroId
    }).then(
      (superheroFind) => {
        if (!superheroFind) throw Error('no se encontró el super heroe');
        return superheroModel.updateOne({
          superheroId
        }, {
          superhero,
          realname,
          superpower
        });
      }
    );
  }
  async removeSuperhero(superheroId) {
    const superhero_remove = superheroModel.findById({
      _id: superheroId
    });
    return superheroModel.deleteOne(superhero_remove);
  }

}
module.exports = SuperheroService;