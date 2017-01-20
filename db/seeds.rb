# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'Demo Account', email: 'demo@demo.demo', user_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", password: 'password')
User.create(username: 'Richard', email: 'demo1@demo.demo', user_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", password: 'password')

Shelter.create(shelter_name: 'Test Shelter', email: 'shelter@shelter.shelter', address: '123 Fake st.', phone_number: '010101', shelter_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", user_id: '1')
Shelter.create(shelter_name: 'Test Shelter2', email: 'shelte2r@shelter.shelter', address: '1232 Fake st.', phone_number: '0101012', shelter_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", user_id: '2')
Shelter.create(shelter_name: 'Test Shelter3', email: 'shelter3@shelter.shelter', address: '1233 Fake st.', phone_number: '0101031', shelter_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", user_id: '1')


Pet.create(name: 'Zeke', pet_type:'dog', age: '3 years old', breed: 'Pit Bull Terrier', gender: 'M', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'1', description:"Zeke is an active and enthusiastic pup who is very people social and loves to play. This happy fellow is stunningly handsome in his brown and gray brindle coat. A family with kids 12 years and older might be fine for Zeke -- come meet him and see if it is a good fit. Zeke's adoption also includes a Welcome Home Gift Package with toys, treats and more!")
Pet.create(name: 'Sarah', pet_type:'blue1', age: '31', breed: 'Husky1', gender: 'F', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'2')
Pet.create(name: 'Lucy', pet_type:'blue', age: '3', breed: 'Husky', gender: 'M', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'1')
Pet.create(name: 'Ignacio', pet_type:'blue1', age: '31', breed: 'Husky1', gender: 'F', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'2')
Pet.create(name: 'Dog', pet_type:'blue', age: '3', breed: 'Husky', gender: 'M', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'1')
Pet.create(name: 'Fido1', pet_type:'blue1', age: '31', breed: 'Husky1', gender: 'F', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'2')
Pet.create(name: 'Fido', pet_type:'blue', age: '3', breed: 'Husky', gender: 'M', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'1')
Pet.create(name: 'Fido1', pet_type:'blue1', age: '31', breed: 'Husky1', gender: 'F', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'2')
Pet.create(name: 'Fido', pet_type:'blue', age: '3', breed: 'Husky', gender: 'M', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'1')
Pet.create(name: 'Fido1', pet_type:'blue1', age: '31', breed: 'Husky1', gender: 'F', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'2')
Pet.create(name: 'Fido', pet_type:'blue', age: '3', breed: 'Husky', gender: 'M', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'1')
Pet.create(name: 'Fido1', pet_type:'blue1', age: '31', breed: 'Husky1', gender: 'F', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'2')
Pet.create(name: 'Fido', pet_type:'blue', age: '3', breed: 'Husky', gender: 'M', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'1')
Pet.create(name: 'Fido1', pet_type:'blue1', age: '31', breed: 'Husky1', gender: 'F', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", shelter_id:'2')
