class EditShelters < ActiveRecord::Migration
  def change
    remove_column :shelters, :password_digest
    remove_column :shelters, :session_token
    add_column :shelters, :user_id, :integer
    add_index :shelters, :user_id
  end
end
