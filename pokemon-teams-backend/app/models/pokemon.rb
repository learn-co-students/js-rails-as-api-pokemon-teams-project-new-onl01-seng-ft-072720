class Pokemon < ApplicationRecord
  belongs_to :trainer
  
  validate do 
    pokemon_count_valid?
  end

  def pokemon_count_valid?
    if self.trainer.pokemons.count >= 6
      self.errors.add(:max, "You have reached the maximum number")
    end
  end

end
