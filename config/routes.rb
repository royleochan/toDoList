Rails.application.routes.draw do
  #root of site
  root 'pages#home'

  #regular route
  get 'index' => 'tasks#index'

  #resource route
  resources :tasks
end
