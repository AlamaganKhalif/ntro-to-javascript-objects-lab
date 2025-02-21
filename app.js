const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
//   console.dir(pokemon, { maxArrayLength: null })
  //console.log(pokemon[58].name)

   //console.game
  game.difficulty = 'medium' 
//   console.log(game)



/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

The starter Pokémon options are:

Pokémon 1: Bulbasaur
Pokémon 4: Charmander
Pokémon 7: Squirtle
Pokémon 25: Pikachu


Solve Exercise 4 here:
*/




const starterPokemon = pokemon.filter (poki => poki.starter === true)[0];

game.party.push(starterPokemon)

// console.log(game)




/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


game.party.push(pokemon[2], pokemon[1], pokemon[0])// 

console.log(game.party)




/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/


for (let i = 0; i < game.gyms.length; i++) {
if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true; 
}
}
console.log(game.gyms)



/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0, 1,), pokemon[game.party[0].number]
console.log(game.party[0])




/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
game.party.forEach((pokemon) => {
console.log(pokemon.name);
})
    // console.log(game.party)





/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

pokemon.forEach((poki) => {
    if (poki.starter === true){
        console.log(poki.name)
    }

})















    /*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
// game.catchPokemon = function(pokemonObj) { // will add the 'catchPokemon' method to the 'game' object
//   this.party.push(pokemonObj);  // so this is gonna  add pokemon to the array
// };
// game.catchPokemon(pokemon[2]) // targets the third pokemon in the arry (index2)d
// console.log(game.party); // this is gonna log the old party

// game.catchPokemon(pokemon[2]);  // this is gonna target the one pokemone in the index (2)
// console.log(game.party);  // so this logs the upadated party 


// game.catchPokemon(pokemon[2]); //targets catchPokemon in index (2)
// console.log(game.party);  // logs updated party array




game.catchPokemon = function(pokemonObj) { // will add the 'catchPokemon' method to the 'game' object
    this.party.push(pokemonObj);  // so this is gonna  add pokemon to the array
  };
  game.catchPokemon(pokemon[2]) // targets the third pokemon in the arry (index2)
  console.log(game.party); // this is gonna log the old party
  
  game.catchPokemon(pokemon[2]);  // this is gonna target the one pokemone in the index (2)
  console.log(game.party);  // so this logs the upadated party 
  
  
  game.catchPokemon(pokemon[2]); //targets catchPokemon in index (2)
  console.log(game.party); 



