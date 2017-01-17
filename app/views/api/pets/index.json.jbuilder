@pets.each do |pet|
  json.set! pet.id do
    json.extract! pet, :id, :name, :pet_image
    json.user_id pet.user.id
  end
end
