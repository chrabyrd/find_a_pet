class CreatePetImages < ActiveRecord::Migration
  def change
    create_table :pet_images do |t|
      t.string :url, null: false
      t.string :title
      t.text :description
      t.integer :pet_id, null: false
      t.timestamps null: false
    end

    add_index :pet_images, :pet_id
  end
end
