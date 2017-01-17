json.partial! "api/pets/pet", pet: @pet
json.set! json.user_id @pet.user.id
