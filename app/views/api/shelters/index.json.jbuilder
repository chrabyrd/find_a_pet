@shelters.each do |shelter|
  json.set! shelter.id do
    json.extract! shelter, :id, :shelter_name
  end
end
