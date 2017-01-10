class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.integer :age, null: false
      t.string :breed, null: false
      t.string :gender, null: false
      t.text :description
      t.integer :shelter_id, null: false
      t.timestamps null: false
    end

    add_index :pets, :type
    add_index :pets, :age
    add_index :pets, :breed
    add_index :pets, :gender
    add_index :pets, :shelter_id
  end
end
