Rails.application.routes.draw do
  #root of site
  root 'pages#home'

  #regular route
  get 'home' => 'pages#home'

  get 'new' => 'pages#new'

  get 'tasks' => 'pages#tasks'

  get 'tasks/:id', to: 'pages#index';


  #resource route
  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create, :show, :update, :destroy]
    end
  end
end
