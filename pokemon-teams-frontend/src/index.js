document.addEventListener("DOMContentLoaded", function() {
    
fetchTrainers();


});

const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// function htmlify(obj) {
//     const pokeArray= obj.pokemons.map((pokemon) => pokemon)
//     const newUL = document.createElement("ul")

//     for (let e of pokeArray) {
//         const newLI = document.createElement("li")
//         newLI.innerText = `${e.nickname} - ${e.species}`
//         newUL.appendChild(newLI)
//     };
    
//     return(`
//         <div class="card" data-id="${obj.id}"><p>${obj.name}</p>
//         ${newUL.querySelector("li")}
//         <button data-trainer-id="${obj.id}">Add Pokemon</button>
//         </div>
//     `)
// };

function createTrainerCard(trainer) {
    let pokemonList = document.createElement('ul')
    trainer.pokemons.forEach((pokemon) => { pokemonList.appendChild(pokemonListItem(pokemon)) })
    
    const trainerCard = 
        `
            <div class="card" data-id="${trainer.id}">
                <p>"${trainer.name}"</p>
                    
                <button data-trainer-id="${trainer.id}">Add Pokemon</button>
            </div>
        `

        document.getElementById(`${trainer.id}`).appendChild(pokemonList)

    return trainerCard
};

function pokemonListItem(pokemon) {
    const pokemonLi = document.createElement("li")
    pokemonLi.innerText = `${pokemon.nickname} - ${pokemon.species}`
    return pokemonLi
};

function renderTrainer(html) {
    document.querySelector("main").innerHTML += html
};

function mountTrainersToDOM(trainers) {
    trainers.forEach(function(trainer){
       const trainerCard = createTrainerCard(trainer);
        renderTrainer(trainerCard);
    });
};

function fetchTrainers(){
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(trainers => {
      mountTrainersToDOM(trainers)
    })
};

// function addLiElement(obj) {
//     obj.pokemons.forEach(function(pokemon){
//         newLI.innerText = `${pokemon.nickname} - ${pokemon.species}`
//         return newLI
//     })
// };

// function fetchPokemons(){
//     fetch(POKEMONS_URL)
//         .then(resp => resp.json())
//         .then(pokemons => {
//             pokemons.forEach(function(pokemon){
//                 debugger
//                 pokemon.trainer.name
//             })
//         })
// };