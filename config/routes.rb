Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create, :show, :update, :destroy]
    end
  end

  get 'tasks/:id', to: 'pages#index';
  get 'tasks/:id/edit', to: 'pages#index';
  root 'pages#index'
end
