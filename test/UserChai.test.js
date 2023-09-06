import chai from "chai";
import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js";

await mongoose.connect(
  "mongodb+srv://guillermofergnani:DBeXuiDCQMqLyMTa@51380.yhqtnxt.mongodb.net/pets"
);

const expect = chai.expect;

describe("Test con chai para users", () => {
  /* before(function () {
    console.log("Arrancando test con chai");
  });

  beforeEach(function () {
    this.timeout(5000);
  }); */

  it("Consultar todos los usuarios de mi BDD con Chai", async function () {
    const users = await userModel.find();

    expect(Array.isArray(users)).to.be.ok;
    expect(users).to.be.an("array");
  });
});
