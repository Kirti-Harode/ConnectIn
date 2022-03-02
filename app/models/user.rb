# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :string
#  pronouns        :string
#  location        :string
#
class User < ApplicationRecord
    validates :fname, :lname, :password_digest, :session_token, presence: true 
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    validates :email, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password 
    after_initialize :ensure_session_token 

    has_one_attached :profile_photo, dependent: :destroy

    has_one :about
    has_many :educations
    has_many :experiences

    has_many :connections,
        foreign_key: :connector_id,
        class_name: :Connection

    has_many :connectees,
        foreign_key: :connectee_id,
        class_name: :Connection
    
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy 
    has_many :likes, dependent: :destroy
    
    def valid_email(params)
        errors = {
            email: nil
        }

        unless email.empty?
            parts = email.split('@')
            unless parts.length != 2 && parts[1] && parts[1].split('.').length == 2
                errors[:email] = 'Enter a valid email'
            end
        end
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64 
    end

end
