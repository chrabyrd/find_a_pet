@pets.each do |pet|
  json.set! pet.id do
    json.extract! pet, :id, :name
    json.user_id pet.user.id
  end
end
