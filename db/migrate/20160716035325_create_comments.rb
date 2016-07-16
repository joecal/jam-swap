class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.integer :category_id
      t.integer :user_id
      t.references :post, index: true, foreign_key: true

      t.timestamps
    end
  end
end
