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
class Connection < ApplicationRecord
    validates :connector_id,  uniqueness: {scope: :connectee_id}
    
    belongs_to :connector, 
        foreign_key: :connector_id,
        class_name: :User

    belongs_to :connectee,
        foreign_key: :connectee_id,
        class_name: :User
end
