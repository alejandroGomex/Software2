const superheroModel = require('../models/superheroModel')
class SuperheroService {
  /* Promesas y funciones asincronicas
    una funcion asincronica devuelve una promesa
    js es un lenguaje que ejecuta un hilo->solo hace una cosa a la vez
  */

  async CreateHero(heroModel) {
    heroModel.save();
    return heroModel;
  }
  async ListHero() {
    return superheroModel.find();
  }
  async ShowHero(heroModelId) {
    return superheroModel.findById({
      _id: heroModelId
    });

  }
  async EditHero(superhero, real_name, dni, feature,superhero_sideKick) {
    return superheroModel.findById({
      _id: heroModelId
    }).then(
      (superheroFind) => {
        if (!superheroFind) throw Error('no se encontró el super heroe');
        return superheroModel.updateOne({
          heroModelId
        }, {
          superhero,
          real_name,
          dni,
          feature,
          superhero_sideKick
        });
      }
    );
  }
  async RemoveHero(heroModelId) {
    const heroModelId_remove = superheroModel.findById({
      _id: heroModelId
    });
    return superheroModel.deleteOne(heroModelId_remove);
  }

}
module.exports = SuperheroService;