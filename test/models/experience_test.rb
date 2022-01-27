# == Schema Information
#
# Table name: experiences
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  title           :string           not null
#  company         :string           not null
#  employment_type :string
#  location        :string
#  start_date      :string           not null
#  end_date        :string
#  headline        :string
#  industry        :string
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class ExperienceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
