# == Schema Information
#
# Table name: pets
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  type        :string           not null
#  age         :integer          not null
#  breed       :string           not null
#  gender      :string           not null
#  description :text
#  shelter_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pet < ActiveRecord::Base
end
