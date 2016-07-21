json.array!(@meetups) do |meetup|
  json.extract! meetup, :id, :title, :description, :url, :created_at

end
