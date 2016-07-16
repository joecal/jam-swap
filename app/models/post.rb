class Post < ApplicationRecord
  has_one :category
  has_one :user
end
