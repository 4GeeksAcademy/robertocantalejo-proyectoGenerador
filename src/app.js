/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { name } from "file-loader";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

/* Estas son las variables para almacenar la información que vamos a introducir mediante inputs */
let names = [];
let surnames = [];
let countries = [];
let affiliations = [];
let traits = [];
/* Esta función es para añadir strings a las variables declaradas antes*/

function pushInputs(
  p_names,
  p_surnames,
  p_countries,
  p_affiliations,
  p_traits
) {
  const inputName = document.querySelector("#input1");
  const inputSurname = document.querySelector("#input2");
  const inputCountry = document.querySelector("#input3");
  const inputAffiliation = document.querySelector("#input4");
  const inputTrait = document.querySelector("#input5");

  if (inputName.value != "") {
    p_names.push(inputName.value);
  }
  if (inputSurname.value !== "") {
    p_surnames.push(inputSurname.value);
    inputSurname.value = "";
  }
  if (inputCountry.value !== "") {
    p_countries.push(inputCountry.value);
    inputCountry.value = "";
  }
  if (inputAffiliation.value !== "") {
    p_affiliations.push(inputAffiliation.value);
    inputAffiliation.value = "";
  }
  if (inputTrait.value !== "") {
    p_traits.push(inputTrait.value);
    inputTrait.value = "";
  }

  console.log(names, surnames, countries, affiliations, traits);
}

document
  .querySelector(".btn-primary")
  .addEventListener("click", () =>
    pushInputs(names, surnames, countries, affiliations, traits)
  );
