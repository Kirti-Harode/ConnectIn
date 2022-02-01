# == Schema Information
#
# Table name: connections
#
#  id           :bigint           not null, primary key
#  connector_id :integer          not null
#  connectee_id :integer          not null
#  accepted     :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class ConnectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
