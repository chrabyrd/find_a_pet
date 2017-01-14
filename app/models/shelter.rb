# == Schema Information
#
# Table name: shelters
#
#  id           :integer          not null, primary key
#  shelter_name :string           not null
#  email        :string           not null
#  address      :string           not null
#  phone_number :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer          not null
#

class Shelter < ActiveRecord::Base
  belongs_to :user
  has_many :pets

  validates :shelter_name, presence: true, uniqueness: true;
  validates :email, presence: true, uniqueness: true;
  validates :address, presence: true, uniqueness: true;
  validates :phone_number, presence: true, uniqueness: true;
end
