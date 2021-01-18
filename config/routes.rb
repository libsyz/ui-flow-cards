Rails.application.routes.draw do
  get 'testimonials/index'
  root to: 'articles#index'
  get '/articles', to: 'articles#index'
  get '/features', to: 'features#index'
  get '/forms', to: 'forms#index'
  get '/maps', to: 'maps#index'
  get '/ecommerce', to: 'ecommerces#index'
  get '/teams', to: 'teams#index'
  get '/dashboards', to: 'dashboards#index'
  get '/searches', to: 'searches#index'
  get '/testimonials', to: 'testimonials#index'
  get '/logins', to: 'logins#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
