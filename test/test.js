const assert = require("assert");
const code = require("../index");


describe("#awesomeAnimals", () => {
  it("returns an object that labels the headers", () => {
    assert.deepEqual(code.awesomeAnimals([
      "Penguin",
      "African Penguin",
      "Spheniscus Demersus",
      "South Africa",
      "Small to Medium",
      "12.4mph",
      "10-15 years"
    ]), {
      TypeOfAnimal:"Penguin",
      species:  "African Penguin",
      scientificClassification:"Spheniscus Demersus",
      location:"South Africa",
      size:"Small to Medium",
      topSpeed:"12.4mph",
      age:"10-15 years"
    });
  });
});
