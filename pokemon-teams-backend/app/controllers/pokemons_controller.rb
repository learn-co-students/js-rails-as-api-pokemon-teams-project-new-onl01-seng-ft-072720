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
end
