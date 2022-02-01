json.extract! comment, :id, :body, :author_id, :post_id, :created_at

json.author do
    json.extract! comment.author, :fname, :lname, :id
    json.profile_photo_url url_for(comment.user.profile_photo) if comment.user.profile_photo.attached?

end