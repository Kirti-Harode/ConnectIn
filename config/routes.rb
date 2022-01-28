Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create,  :show, :update]
    resource :session, only: [:create, :destroy]

    resources :abouts, only: [:index, :create, :update, :destroy]
    resources :educations, only: [:index, :create, :update, :destroy]
    resources :experiences, only: [:index, :create, :update, :destroy]
   

  end

end
