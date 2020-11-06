class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        render :json=> trainers, include: :pokemons
    end

    def show
        trainer = Trainer.find_by_id(params[:id])

        if trainer
            render :json => trainer, include: :pokemons
        else
            render :json => {message: 'Trainer not found'}
        end
    end
end
