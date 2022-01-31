# == Schema Information
#
# Table name: educations
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  school         :string           not null
#  degree         :string
#  field_of_study :string
#  description    :text
#  activities     :text
#  start_date     :string           not null
#  end_date       :string           not null
#  grade          :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Education < ApplicationRecord
    validates :user_id, :school, :start_date, :end_date, presence: true

    belongs_to :user
end
