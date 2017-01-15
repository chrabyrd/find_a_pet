# == Schema Information
#
# Table name: shelters
#
#  id           :integer          not null, primary key
#  shelter_name :string           not null
#  email        :string           not null
#  address      :string           not null
#  phone_number :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer          not null
#

class Shelter < ActiveRecord::Base
  belongs_to :user
  has_many :pets

  validates :shelter_name, :email, :address, :phone_number,
            presence: true, uniqueness: true
end
