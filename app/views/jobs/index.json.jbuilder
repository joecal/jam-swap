json.array!(@jobs) do |job|
  json.extract! job, :id, :title, :description, :url, :created_at

end
