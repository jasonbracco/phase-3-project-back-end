class CreateShoes < ActiveRecord::Migration[6.1]
  def change
      create_table :shoes do |t|
        t.integer :brand_id
        t.string :nickname
        t.string :color
        t.integer :price
        t.integer :size_id
        t.integer :function_id
        t.string :image_url
        t.timestamps
      end
    end
  end