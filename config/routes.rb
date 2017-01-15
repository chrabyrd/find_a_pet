Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :shelters
    resources :pets
    resources :pet_images
    resource :session, only: [:create, :destroy]
  end
end
