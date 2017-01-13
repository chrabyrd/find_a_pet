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
  has_many :pets

  validates :shelter_name, :email, :address, :phone_number, :password_digest, :session_token, presence: true
  validates :shelter_name, :email, :address, :phone_number, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(shelter_name, password)
    shelter = Shelter.find_by_shelter_name(shelter_name)
    return nil unless shelter
    shelter.valid_password?(password) ? shelter_: nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
