class ChangeUsersColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :string
    add_column :users, :pronouns, :string 
    add_column :users, :location, :string
  end
end
