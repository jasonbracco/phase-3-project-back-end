class CreateFunctions < ActiveRecord::Migration[6.1]
  def change
    create_table :functions do |t|
      t.string :function
      t.timestamps
    end
  end
end
