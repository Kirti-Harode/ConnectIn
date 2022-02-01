json.extract! post, :id, :body, :author_id, :created_at

if post.media.attached?
    json.media_url url_for(post.media)
end

json.author do
    json.extract! post.author, :fname, :lname, :id, :bio
    json.profile_photo_url url_for(post.author.profile_photo) if post.author.profile_photo.attached?
end