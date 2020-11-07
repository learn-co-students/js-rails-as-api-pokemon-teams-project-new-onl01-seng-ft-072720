class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all 
        render json: pokemons
    end

    def show
        pokemon = pokemon.find(params[:id])
        render json: trainer
    end

    def create
        trainer = Trainer.find(params[:trainer_id])
        pokemon = trainer.pokemons.build({
            nickname: Faker::Name.first_name,
            species: Faker::Games::Pokemon.name,
        })
        if pokemon.save 
            render json: pokemon 
        else
            render json: {message: pokemon.errors.messages[:max][0]}
        end

    end

    def destroy
        pokemon = pokemon.find(params[:id])
        pokemon.destroy
        # render json: pokemon
    end

end
