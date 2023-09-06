import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js";
import Assert from "assert";

const assert = Assert.strict;

await mongoose.connect(
  "mongodb+srv://guillermofergnani:DBeXuiDCQMqLyMTa@51380.yhqtnxt.mongodb.net/pets"
);

describe("Test de consulta a todos los usuarios", () => {
  before(function () {
    console.log("arrancando con todos los tests");
    mongoose.connection.collections.users.drop();
  });
  /* before(function () {
    console.log("arrancando con todos los tests");
  });

  beforeEach(function () {
    console.log("arrancando un test");
    this.timeout(500);
  }); */

  it("Test para obtener todos los usuarios de mi BDD", async function () {
    const users = await userModel.find();

    assert.strictEqual(Array.isArray(users), true); //Que sea un array
  });

  it("Test para crear un usuario en mi BDD", async function () {
    const newUser = {
      first_name: "Pepe",
      last_name: "Perez",
      email: "pWEAEWAEWA@pepito.com",
      password: "@1At3@",
    };
    const resultado = await userModel.create(newUser);

    assert.ok(resultado._id); //resultado._id -> id || error o undefined o null
  });

  it("Eliminar usuario generado", async function () {
    const email = "andalucia@pepito.com";

    const user = await userModel.findOneAndDelete({ email: email });
    console.log(user);
    assert.strictEqual(typeof user, "object");
  });
});
