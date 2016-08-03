class Meetup < ApplicationRecord
  has_one :category
  has_one :user
  # AM: Good job using a single model to handle comments that belong to different models. Keeps the schema clean!
  has_many :comments
end
