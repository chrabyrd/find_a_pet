class ChangeShelters < ActiveRecord::Migration
  def change
    change_table :shelters do |t|
      t.change(:phone_number, :string, null: false)
    end
  end
end
