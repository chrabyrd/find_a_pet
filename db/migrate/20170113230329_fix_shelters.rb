class FixShelters < ActiveRecord::Migration
  def change
    change_table :shelters do |t|
      t.change(:user_id, :integer, null: false)
      t.remove_index :phone_number
    end
  end
end
