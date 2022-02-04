json.extract! comment, :id, :body, :author_id, :post_id, :created_at

json.author do
    json.extract! comment.author, :fname, :lname, :bio, :id
    json.profile_photo_url url_for(comment.author.profile_photo) if comment.author.profile_photo.attached?

end