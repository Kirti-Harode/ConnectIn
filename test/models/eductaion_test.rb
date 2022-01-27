# == Schema Information
#
# Table name: eductaions
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
require 'test_helper'

class EductaionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
