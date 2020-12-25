Rails.application.routes.draw do
  root to: 'articles#index'
  get '/articles', to: 'articles#index'
  get '/features', to: 'features#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
