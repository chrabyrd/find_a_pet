class CreateShelters < ActiveRecord::Migration
  def change
    create_table :shelters do |t|
      t.string :shelter_name, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.integer :phone_number, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps null: false
    end

    add_index :shelters, :shelter_name, unique: true
    add_index :shelters, :email, unique: true
    add_index :shelters, :address, unique: true
    add_index :shelters, :phone_number, unique: true
  end
end
