const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
loadTrainers()



function loadTrainers() {
    const configObj = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(TRAINERS_URL, configObj)
        .then(resp => resp.json())
        .then(dataset => displayTrainerCards(dataset))
}

function displayTrainerCards(dataset) {
    dataset.forEach(data => {
        const name = data.name
        const pokemons = data.pokemons

        const main = document.querySelector("body > main");
        const card = document.createElement("div")
        card.className = "card";
        card.dataset.id = data.id
        main.append(card)

        const p = document.createElement("p")
        p.innerText = name
        
        card.append(p)

        const button = document.createElement("button")
        button.dataset.trainerId = data.id
        button.innerText = "Add Pokemon"
        card.append(button)

        const ul = document.createElement("ul")
        card.append(ul)

        displayPokemons(pokemons, ul)
        // add pokemon button here?
    })

}

function displayPokemons(pokemons, ul) {
    pokemons.forEach(pokemon => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.className = "release"
        button.dataset.pokemonId = pokemon.id
        button.innerText = "Release"

        li.innerText = `${pokemon.nickname} (${pokemon.species})`
        ul.append(li)
        li.appendChild(button)

    })
}


function createPokemon(trainer_id) {
    fetch("http://localhost:3000/pokemons", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    trainer_id: trainer_id
  })
})
    .then(resp => resp.json())
    .then(pokemon => mountNewPokemon(pokemon))
}

function mountNewPokemon(pokemon) {
    // to be continued...
}