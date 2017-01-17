class AddPhotosToShelters < ActiveRecord::Migration
  def change
    add_column :shelters, :shelter_image, :string
  end
end
