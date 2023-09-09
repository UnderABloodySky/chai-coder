
import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js";
import chai from "chai";
import chaiHttp from "chai-http";

const assert = chai.assert;
const expect = chai.expect;
chai.use(chaiHttp);

await mongoose.connect(
  "mongodb+srv://guillermofergnani:DBeXuiDCQMqLyMTa@51380.yhqtnxt.mongodb.net/pets"
);

describe("Test del modelo de USUARIO", () => {
  before(function () {
    console.log("arrancando con todos los tests");
    mongoose.connection.collections.users.drop();
  });

  it("Test para obtener todos los usuarios de mi BDD", async function () {
    const users = await userModel.find();
    expect(users).to.be.an("array");
    expect(users).to.have.lengthOf(0);
  });

  it("Test para crear un usuario en mi BDD", async function () {
    const newUser = {
      first_name: "Pepe",
      last_name: "Perez",
      email: "pepe@perez.com",
      password: "@1At3@",
    };
    const usuarioCreado = await userModel.create(newUser);
    expect(usuarioCreado).to.have.property("_id");
  });

  it("Eliminar usuario generado", async function () {
    const email = "pepe2@perez.com";

    const user = await userModel.findOneAndDelete({ email: email });
    expect(user).to.be.an("object");
  });

  it("Test para obtener todos los usuarios de mi BDD", async function () {
    const users = await userModel.find();

    expect(users).to.be.an("array");
  });

  it("Test para crear un usuario en mi BDD", async function () {
    const newUser = {
      first_name: "Pepe",
      last_name: "Perez",
      email: "pWEAEWAEWA@pepito.com",
      password: "@1At3@",
    };
    const resultado = await userModel.create(newUser);
    expect(resultado).to.have.property("_id");
  });

  it("Eliminar usuario generado", async function () {
    const email = "andalucia@pepito.com";

    const user = await userModel.findOneAndDelete({ email: email });
    expect(user).to.be.an("object");
  });
});