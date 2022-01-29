# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
About.delete_all
Experience.delete_all
Education.delete_all

user1 = User.create!(email: 'harry@gmail.com', fname: 'Harry', lname: 'potter', password: 'password', bio: "I love to code", pronouns: 'He/His/Him', location: "SF");

demo_user = User.create!(
    email: 'test@gmail.com',
    password: 'password',
    fname: 'Kitty',
    lname: 'Cat',
    bio: "I am Demo User",
    pronouns: 'He/His/Him',
    location: "Sunnyvale"
   
)

about1 = About.create!(user_id: user1.id, body: "Software Engineer, ability to create video Games.");
about2 = About.create!(user_id: demo_user.id, body: "Hi I am demo user Currently working under Kirti to help her develop ConnectIn ")
about3 = About.create!(user_id: demo_user.id, body: "I am a Programmer, coding is my life.");

experience1 = Experience.create!(
    user_id: user1.id,
    title: "Sowftware Engineer",
    employment_type: "Full-time",
    company: "Google",
    location: " Montainview, California, United States",
    start_date: "April 2017",
    end_date: "August 2024",
    headline: "Good company",
    industry: "Computer",
    description: "some description"
)
experience2 = Experience.create!(
    user_id: demo_user.id,
    title: "Sowftware Engineer",
    employment_type: "Full-time",
    company: "ConnectIn",
    location: " Sunnyvale, California, United States",
    start_date: "Dec 2021",
    end_date: "At present",
    headline: "Connect people professionally",
    industry: "Web",
    description: "some description"
)
experience3 = Experience.create!(
    user_id: demo_user.id,
    title: "testing-user",
    employment_type: "Full-time",
    company: "ConnectIn",
    location: " Sunnyvale, California, United States",
    start_date: "Dec 2021",
    end_date: "jan-2022",
    headline: "Connect people professionally",
    industry: "Web",
    description: "some description"
)
education1 = Education.create!(
    user_id: user1.id,
    school: "University of California",
    degree: "Bachelor's",
    field_of_study: "Computer Engineering",
    activities: "Many Activities",
    description: "Good Time",
    grade: "9.9",
    start_date: "August 2012",
    end_date: "December 2017",
)

education2 = Education.create!(
    user_id: demo_user.id,
    school: "University of California",
    degree: "Bachelor's in Science",
    field_of_study: "Computer Engineering",
    activities: "Many Activities",
    description: "Good Time",
    grade: "9.9",
    start_date: "August 2012",
    end_date: "December 2017",
)