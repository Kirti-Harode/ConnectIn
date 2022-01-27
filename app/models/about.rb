# == Schema Information
#
# Table name: abouts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class About < ApplicationRecord
    validates :user_id, :body, presence: true

    belongs_to :user
end
