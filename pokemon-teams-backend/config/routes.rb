Rails.application.routes.draw do
  resources :pokemons, only: [:index, :show, :create, :destroy]
  resources :trainers, only: [:index, :show]
end
