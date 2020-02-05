# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

SAMPLE_TASKS = [{
    title: 'CS2100',
    description: 'Tutorial 1',
    completed: false,
    starred: false,
    due: Date.new(2020, 2, 20)
  },{
    title: 'CS2040S',
    description: 'Recitation 3',
    completed: false,
    starred: false,
    due: Date.new(2020, 2, 27)
  }, {
    title: 'MA1101R',
    description: 'Lab 1',
    completed: false,
    starred: false,
    due: Date.new(2020, 2, 28)
  }
]
  
SAMPLE_TASKS.each do |task|
    Task.create(task)
end