class PokemonSerializer

    def initialize(pokemon)
        @pokemon = pokemon
    end

    def to_serialized_json
        options = {
          include: {
            trainer: {
              only: [:id, :name]
            }
          },
          only: [:id, :nickname, :species, :trainer_id]
        }
        @pokemon.to_json(options)
      end

end
  