json.extract! user, :id, :email, :fname, :lname, :bio, :pronouns, :location

json.profile_photo_Url url_for(user.profile_photo) if user.profile_photo.attached?