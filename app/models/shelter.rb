# == Schema Information
#
# Table name: shelters
#
#  id              :integer          not null, primary key
#  shelter_name    :string           not null
#  email           :string           not null
#  address         :string           not null
#  phone_number    :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Shelter < ActiveRecord::Base
end
