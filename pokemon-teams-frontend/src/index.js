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

        const header = document.querySelector("body > header");
        const card = document.createElement("div")
        card.className = "card";
        card.dataset.id = data.id
        header.append(card)

        const p = document.createElement("p")
        p.innerText = name
        
        card.append(p)

        const button = document.createElement("button")
        button.dataset.trainerId = data.id
        button.innerText = "Add Pokemon"
        card.append(button)

        displayPokemons(pokemons)
    })

}

function displayPokemons(pokemons) {
    pokemons.forEach(pokemon => {
        
    })
}