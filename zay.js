let country = "Portugal";
let continent = "Europe";
let population = "10";
console.log(country, continent, population);

let island = false;
let language;
console.log(typeof island, typeof population, typeof country);

language = "Yoruba";
const name = "Akpowu";
const surname = "Arubi";

console.log(population / 2);
population++;
console.log(population > 6);
console.log(population < 33);

const description = `${country} is in ${continent} and ${population} million people speak ${language}`;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
