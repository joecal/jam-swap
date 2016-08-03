class Meetup < ApplicationRecord
  # AM: Do you have a category model?
  has_one :category
  has_one :user
  # AM: You have the right idea using a single comments model to handle that functionality for multiple models. I don't see you actually defining/implementing it though...
  has_many :comments
end
