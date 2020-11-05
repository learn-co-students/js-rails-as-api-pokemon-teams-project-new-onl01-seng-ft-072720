class PokemonsController < ApplicationController
    def index
        pokemons = Pokemon.all
        render :json=> pokemons
    end

    def show
        pokemon = Pokemon.find_by_id(params[:id])

        if pokemon
            render :json => pokemon
        else
            render :json => {message: 'Pokemon not found'}
        end
    end

    def create
        # byebug
        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        pokemon = Pokemon.create(nickname: name, species: species, trainer_id: params[:pokemon][:trainer_id])

        if pokemon
            render :json => pokemon
        else
            render :json => {message: "Something went wrong"}
        end
    end

    def destroy
        pokemon = Pokemon.find_by_id(params[:id])
        if pokemon.destroy
            render :json => pokemon
        else
            render :json => {message: "Something went wrong"}
        end
    end
end
