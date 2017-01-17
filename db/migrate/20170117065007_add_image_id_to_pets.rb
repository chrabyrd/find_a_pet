class AddImageIdToPets < ActiveRecord::Migration
  def change
    add_column :pets, :pet_image, :string
  end
end
