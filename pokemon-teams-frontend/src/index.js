const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')


function getTrainers() {
    return fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(obj => {
        trainersToDom(obj)
    }
    )
}

function trainersToDom(trainersArray) {
    main.innerHTML = ''
    for (let trainer of trainersArray) {
        main.innerHTML += trainerToHTML(trainer)
    }
}

function trainerToHTML(trainer) {
    html = `
    <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
    <button class="add" data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul>    
 
    `
    for (let pokemon of trainer.pokemons) {
        html += `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
    }
    html += `   
    </ul>
    </div>`

    return html
}

function mountButtons() {
    main.addEventListener('click', function(e) {
        if (e.target.className === 'release') {
            const  pokemonId = e.target.dataset.pokemonId
            releasePokemon(pokemonId)
        } else if (e.target.className === 'add') {
            if (e.target.parentElement.querySelectorAll('li').length < 6) {
            const trainerId = e.target.dataset.trainerId
            addPokemon(trainerId)
            } else {
                alert('You may only have six pokemon on your team at once!')
            }
        }
    })
}

function releasePokemon(pokemonId) {
    fetch(`${POKEMONS_URL}/${pokemonId}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(data =>{
      getTrainers()
  })
}

function addPokemon(trainerId) {
    console.log('Add a pokemon!')
    fetch(`${POKEMONS_URL}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({trainer_id: trainerId}) 
  })
  .then(resp => resp.json())
  .then(pokemon =>{
    getTrainers()
  })
}

getTrainers()
mountButtons()
  