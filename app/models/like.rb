# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer          not null
#  likeable_id   :integer          not null
#  likeable_item :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
    validates :liker_id, uniqueness: { scope: [:likeable_item, :likeable_id] }

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User

        belongs_to :post,
            foreign_key: :likeable_id,
            class_name: :Post
            
    # belongs_to :likeable_type, polymorphic: true
end
