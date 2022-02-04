# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :body, :author_id, presence: true

    has_one_attached :media, dependent: :destroy

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments, dependent: :destroy 
    # has_many :likes, as: :likeable_item, dependent: :destroy    
    has_many :likes,
        foreign_key: :likeable_id,
        class_name: :like 
end
