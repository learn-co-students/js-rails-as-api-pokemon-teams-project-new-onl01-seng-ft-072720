class PokemonsController < ApplicationController
    before_action :set_pokemon, only: [:show]

    def index
        @pokemons = Pokemon.all
        render json: PokemonSerializer.new(@pokemons).to_serialized_json
    end

    def show
        render json: @pokemon
    end

    private

    def set_pokemon
        @pokemon = Pokemon.find_by_id(params[:id])
    end
end
