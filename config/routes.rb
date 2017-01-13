Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :shelters
    resource :session, only: [:create, :destroy]
  end
end
