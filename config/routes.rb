Rails.application.routes.draw do
  get 'ecommerces/index'
  get 'maps/index'
  get 'forms/index'
  root to: 'articles#index'
  get '/articles', to: 'articles#index'
  get '/features', to: 'features#index'
  get '/forms', to: 'forms#index'
  get '/maps', to: 'maps#index'
  get '/ecommerce', to: 'ecommerces#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
