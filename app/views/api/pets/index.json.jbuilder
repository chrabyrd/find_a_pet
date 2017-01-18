@pets.each do |pet|
  json.set! pet.id do
    json.extract! pet, :id, :name, :pet_image, :shelter_id
    json.user_id pet.user.id
  end
end
