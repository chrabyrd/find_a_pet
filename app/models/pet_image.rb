# == Schema Information
#
# Table name: pet_images
#
#  id          :integer          not null, primary key
#  url         :string           not null
#  title       :string
#  description :text
#  pet_id      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PetImage < ActiveRecord::Base
end
