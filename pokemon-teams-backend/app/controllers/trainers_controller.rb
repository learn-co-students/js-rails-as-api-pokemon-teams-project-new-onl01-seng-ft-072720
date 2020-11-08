class TrainersController < ApplicationController
    before_action :set_trainer, only: [:show]

    def index
        @trainers = Trainer.all
        render json: TrainerSerializer.new(@trainers).to_serialized_json
    end

    def show
         render json: @trainer
    end

    private

    def set_trainer
        @trainer = Trainer.find_by_id(params[:id])
    end
end
