class CreateEductaions < ActiveRecord::Migration[5.2]
  def change
    create_table :eductaions do |t|
      t.integer :user_id, null: false 
      t.string :school, null: false
      t.string :degree 
      t.string :field_of_study
      t.text :description
      t.text :activities
      t.string :start_date, null: false 
      t.string :end_date, null: false 
      t.string :grade

      t.timestamps
    end
    add_index :eductaions, :user_id
  end
end
