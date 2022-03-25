const personBillModel = require('../models/personBillModel')
class peopleBillService {
  /* Promesas y funciones asincronicas
    una funcion asincronica devuelve una promesa
    js es un lenguaje que ejecuta un hilo->solo hace una cosa a la vez
  */

  async CreatePerson(personBill) {
    personBill.save();
    return personBill;
  }
  async listPerson() {
    return personBillModel.find();
  }
  async ShowPerson(personBillId) {
    return personBillModel.findById({
      _id: personBillId
    });

  }
  async editPerson(personBillId, name, lastName, address) {
    return personBillModel.findById({
      _id: personBillId
    }).then(
      (superheroFind) => {
        if (!superheroFind) throw Error('no se encontró el super heroe');
        return personBillModel.updateOne({
          personBillId
        }, {
          name,
          lastName,
          address
        });
      }
    );
  }
  async removePerson(personBillId) {
    const personBill_remove = personBillModel.findById({
      _id: personBillId
    });
    return personBillModel.deleteOne(personBill_remove);
  }

}
module.exports = peopleBillService;