# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'Demo Account', email: 'demo@demo.demo', password: 'password')
Shelter.create(shelter_name: 'Test Shelter', email: 'shelter@shelter.shelter', address: '123 Fake st.', phone_number: '010101', password: 'password' )
