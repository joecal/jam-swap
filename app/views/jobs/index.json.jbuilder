json.array!(@posts) do |post|
  json.extract! post, :id, :title, :description, :email, :phone, :street, :city, :state, :picture_url
  json.url post_url(post, format: :json)
end
