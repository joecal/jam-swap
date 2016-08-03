class Job < ApplicationRecord
  has_one :category
  # AM: Is this supposed to correspond with a "User" model?
  has_one :user
  has_many :comments
end
