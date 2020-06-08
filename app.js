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


//Once I get the array of information I need to manipulate it into categories and be able to extract that as the name and type of pokemon. 
//the json portion of this was confusing me and added to complications. 

//now that I looked through this again was I getting my list from the website or from the text file?
//I have a habit of overcomplicating things and just need to do only as the instructions have asked me to do
