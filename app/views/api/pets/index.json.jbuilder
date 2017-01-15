@pets.each do |pet|
  json.set! pet.id do
    json.extract! pet, :id, :name
  end
end
