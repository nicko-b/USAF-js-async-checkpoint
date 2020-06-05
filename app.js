const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(json => console.log(json))
  //.catch(err => console.log(err))

const promises = [];
for (let i = 1; i <= 5; i++) { //890 pokemon
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  promises.push(fetch(url).then(res => res.json()));
}

Promise.all(promises).then(results => {
  console.log(results);
});
