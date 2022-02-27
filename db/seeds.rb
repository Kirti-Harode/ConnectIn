# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Comment.delete_all
Like.delete_all
Connection.delete_all
Post.delete_all
Education.delete_all
Experience.delete_all
About.delete_all
User.delete_all


demo_user = User.create!(
    email: 'kirti@gmail.com',
    password: 'password',
    fname: 'Kirti',
    lname: 'Harode',
    bio: "Founder of ConnectIn",
    pronouns: 'she/her/hers',
    location: "Sunnyvale"
    
)
demo_user_photo = open("https://connectin-aa-dev.s3.us-west-1.amazonaws.com/mypic1.png")
demo_user.profile_photo.attach(io: demo_user_photo, filename: 'mypic1.png' )


# user1 = User.create!(email: 'harry@gmail.com', fname: 'Harry', lname: 'potter', password: 'password', bio: "Web developer", pronouns: 'He/His/Him', location: "SF");
user2 = User.create!(email: 'AlexCiminillo@gmail.com', fname: 'Alex ', lname: 'Ciminillo', password: 'password', bio: "Web developer", pronouns: 'He/His/Him', location: "CA");
user3 = User.create!(email: 'AmandaChen@gmail.com', fname: 'Amanda', lname: 'Chen', password: 'password', bio: "Web developer", pronouns: 'she/her/hers', location: "LA");
user4 = User.create!(email: 'AnnKim@gmail.com', fname: 'Ann', lname: 'Kim', password: 'password', bio: "Founder of Pupfinder", pronouns: 'she/her/hers', location: "NY");
user5 = User.create!(email: 'ArleenPandher@gmail.com', fname: 'Arleen', lname: 'Pandher', password: 'password', bio: "Founder of Herozon", pronouns: 'she/her/hers', location: 'Canada');
user6 = User.create!(email: 'BrianKo@gmail.com', fname: 'Brian', lname: 'Ko', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user7 = User.create!(email: 'CharlieSheppard@gmail.com', fname: 'Charlie', lname: 'Sheppard', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user8 = User.create!(email: 'ChrisPark@gmail.com', fname: 'Chris', lname: 'Park', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user9 = User.create!(email: 'DanielBai@gmail.com', fname: 'Daniel', lname: 'Bai', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user10 = User.create!(email: 'HarshaBandi@gmail.com', fname: 'Harsha', lname: 'Bandi', password: 'password', bio: "Founder of Disco", pronouns: 'he/him/his', location: "CA");
user11 = User.create!(email: 'EfremPorter@gmail.com', fname: 'Efrem', lname: 'Porter', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user12 = User.create!(email: 'JackTomasik@gmail.com', fname: 'Jack', lname: 'Tomasik', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user13 = User.create!(email: 'JerryPhan@gmail.com', fname: 'Jerry', lname: 'Phan', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user14 = User.create!(email: 'PerryXie@gmail.com', fname: 'Perry', lname: 'Xie', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user16 = User.create!(email: 'PresleyReedIii@gmail.com', fname: 'Presley', lname: 'Reed Iii', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user17 = User.create!(email: 'ThiagoMiglioranziMoura@gmail.com', fname: 'Thiago', lname: 'Miglioranzi Moura', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user18 = User.create!(email: 'ZackAlsiday@gmail.com', fname: 'Zack', lname: 'Alsiday', password: 'password', bio: "Web developer", pronouns: 'he/him/his', location: "CA");
user19 = User.create!(email: 'HelenEdwards@gmail.com', fname: 'Helen', lname: 'Edwards', password: 'password', bio: "Web developer", pronouns: 'she/her/hers', location: "SF");
user20 = User.create!(email: 'JJZhang@gmail.com', fname: 'JJ', lname: 'Zhang', password: 'password', bio: "Founder of MaMazon", pronouns: 'she/her/hers', location: "SF");
user21 = User.create!(email: 'LaneyLuong@gmail.com', fname: 'Laney', lname: 'Luong', password: 'password', bio: "Founder of SparrowHood", pronouns: 'she/her/hers', location: "SF");
user22 = User.create!(email: 'MichelleHuang@gmail.com', fname: 'Michelle', lname: 'Huang', password: 'password', bio: "Founder of Instacam", pronouns: 'she/her/hers', location: "SF");
user23 = User.create!(email: 'AyceLacap@gmail.com', fname: 'Ayce', lname: 'Lacap', password: 'password', bio: "Instructor at App Academy", pronouns: 'she/her/hers', location: "SF");
user24 = User.create!(email: 'DarrenEid@gmail.com', fname: 'Darren', lname: 'Eid', password: 'password', bio: "Instructor at App Academy", pronouns: 'he/him/his', location: "CA");
user25 = User.create!(email: 'SpencerIascone@gmail.com', fname: 'Spencer', lname: 'Iascone', password: 'password', bio: "Instructor at App Academy", pronouns: 'he/him/his', location: "CA");
user26 = User.create!(email: 'DiegoChavez@gmail.com', fname: 'Diego', lname: 'Chavez', password: 'password', bio: "Instructor at App Academy", pronouns: 'he/him/his', location: "CA");
user27 = User.create!(email: 'YuHuanW@gmail.com', fname: 'YuHuan', lname: 'W', password: 'password', bio: "Instructor at App Academy", pronouns: 'he/him/his', location: "CA");

# user1_photo = open('https://connectin-aa-dev.s3.us-west-1.amazonaws.com/harry.jpeg')
# user1.profile_photo.attach(io: user1_photo, filename: 'harry.jpeg' )

user5_photo = open('https://connectin-aa-dev.s3.us-west-1.amazonaws.com/arleen.png')
user5.profile_photo.attach(io: user5_photo, filename: 'arleen.png' )

# about1 = About.create!(user_id: user1.id, body: "Software Engineer, ability to create magic with coding.");
about2 = About.create!(user_id: demo_user.id, body: "Hello, I am a software engineer with experience in building full-stack web applications implementing technologies like React, Redux, PostgreSQL, MongoDB, Ruby on Rails, Express.  
    My most recent projects involve making a professional networking clone website of LinkedIn and the development of a 2d game in JavaScript and canvas.
    Additional Skills: Ruby - Javascript - SQL - HTML5 - CSS - Webpack")
about3 = About.create!(user_id: user2.id, body: "I love programming.");

# experience1 = Experience.create!(
#     user_id: user1.id,
#     title: "Software Engineer",
#     employment_type: "Full-time",
#     company: "Google",
#     location: " Montainview, California, United States",
#     start_date: "April 2017",
#     end_date: "August 2024",
#     headline: "Good company",
#     industry: "Computer",
#     description: "some description"
# )
experience2 = Experience.create!(
    user_id: demo_user.id,
    title: "Intern",
    employment_type: "Full-time",
    company: "BHEL",
    location: "India",
    start_date: "2016",
    end_date: "2017",
    headline: "Electrical Equipment Company",
    industry: "",
    description: "Engineering and manufacturing company "
)
experience3 = Experience.create!(
    user_id: demo_user.id,
    title: "Intern",
    employment_type: "Full-time",
    company: "Myinfoline",
    location: "India",
    start_date: "2017",
    end_date: "2018",
    headline: "Web Development",
    industry: "",
    description: "Web development"
)

experience4 = Experience.create!(
    user_id: demo_user.id,
    title: "Software Engineer",
    employment_type: "Full-time",
    company: "ConnectIn",
    location: " Sunnyvale, California, United States",
    start_date: "Dec 2021",
    end_date: "At present",
    headline: "Connect people professionally",
    industry: "Web",
    description: "Professional networking"
)

experience5 = Experience.create!(
    user_id: demo_user.id,
    title: "CEO",
    employment_type: "Full-time",
    company: "ConnectIn",
    location: " Sunnyvale, California, United States",
    start_date: "Dec 2021",
    end_date: "jan-2022",
    headline: "Connect people professionally",
    industry: "Web",
    description: "Professional networkin"
)

# education1 = Education.create!(
#     user_id: user1.id,
#     school: "University of California",
#     degree: "Bachelor's",
#     field_of_study: "Computer Engineering",
#     activities: "Many Activities",
#     description: "Good Time",
#     grade: "9.9",
#     start_date: "August 2012",
#     end_date: "December 2017",
# )
# education7 = Education.create!(
#     user_id: user1.id,
#     school: "Hogwarts School of Witchcraft and Wizardry, Scotland",
#     degree: "Bachelor's magic",
#     field_of_study: "Magic",
#     activities: "Many Activities",
#     description: "Good Time",
#     grade: "9.9",
#     start_date: "August 2012",
#     end_date: "December 2017",
# )
education3 = Education.create!(
    user_id: demo_user.id,
    school: "SVM School, India",
    degree: "High School",
    field_of_study: "",
    activities: "",
    description: "",
    grade: "9.9",
    start_date: "July 2007",
    end_date: "Jan 2011",
)
education4 = Education.create!(
    user_id: demo_user.id,
    school: "School of Excellence, India",
    degree: "Higher Secondary",
    field_of_study: "",
    activities: "",
    description: "",
    grade: "9.9",
    start_date: "July 2011",
    end_date: "Sep 2013",
)
education5 = Education.create!(
    user_id: demo_user.id,
    school: "RGPV University",
    degree: "Bachelor of Engineering",
    field_of_study: "Electrical & Electronics Engineering",
    activities: "Many Activities",
    description: "",
    grade: "9.9",
    start_date: "Jun 2013",
    end_date: "Aug 2017",
);

education6 = Education.create!(
    user_id: demo_user.id,
    school: "App Academy",
    degree: "Computer software Engineering",
    field_of_study: "React, Redux, Ruby on Rails, JavaaScript, webpack",
    activities: "",
    description: "Good Time",
    grade: "9.9",
    start_date: "Oct 2021",
    end_date: "Feb 2022",
)

post1 = Post.create!(
    body: "Welcome, all to ConnectIn, this is a LinkedIn clone.
    ConnectIn is a platform to connect with people professionally.
    Feel free to play around. ",
    author_id: demo_user.id
)

post1_photo = open('https://connectin-aa-dev.s3.us-west-1.amazonaws.com/logo_alpha.png')
post1.media.attach(io: post1_photo, filename: 'logo_alpha.png')

post2 = Post.create!(
    body: " Just joined ConnectIn :) ",
    author_id: user5.id
)


post3 = Post.create!(
    body: "Just joined ConnectIn :) ",
    author_id: user4.id
)

post4 = Post.create!(
    body: "let hired= true;
        if (hired) {
        let company= Publica;
        const aA= App Academy;
        thanksTo.concat(aA.instructors, aA.coaches, 20210706sfCohort, coffee);
        letsGet(this.bread);
        return clichéLinkedInPost('I am happy to announce...', company, thanksTo)
        } ",
    author_id: user27.id
)

post4_photo = open('https://connectin-aa-dev.s3.us-west-1.amazonaws.com/happy.png')
post4.media.attach(io: post4_photo, filename: 'happy.png')

post5 = Post.create!(
    body: ":) ",
    author_id: user11.id
)

post5_photo = open('https://connectin-aa-dev.s3.us-west-1.amazonaws.com/coding_meme1.png')
post5.media.attach(io: post5_photo, filename: 'coding_meme1.png')

post6 = Post.create!(
    body: "Let's burn some calories ",
    author_id: demo_user.id
)

post6_photo = open('https://connectin-aa-dev.s3.us-west-1.amazonaws.com/coding_meme2.png')
post6.media.attach(io: post6_photo, filename: 'coding_meme2.png')

post7 = Post.create!(
    body: "Just joined ConnectIn :)",
    author_id: user20.id
)

# comment1 = Comment.create!(
#     author_id: user1.id,
#     post_id: post2.id,
#     body: "You can do it!"
# )

comment2 = Comment.create!(
    author_id: user25.id,
    post_id: post1.id,
    body: "Keep up the good work Kirti."
)

comment3 = Comment.create!(
    author_id: user27.id,
    post_id: post1.id,
    body: "Good job."
)

comment4 = Comment.create!(
    author_id: user26.id,
    post_id: post1.id,
    body: "Good job, but I see some areas where you can improve a bit more."
)

comment5 = Comment.create!(
    author_id: user24.id,
    post_id: post1.id,
    body: "Nice work Kirti"
)

comment6 = Comment.create!(
    author_id: user23.id,
    post_id: post1.id,
    body: "That's Awesome"
)

comment7 = Comment.create!(
    author_id: user26.id,
    post_id: post4.id,
    body: "Congratulations."
)
comment8 = Comment.create!(
    author_id: user20.id,
    post_id: post4.id,
    body: "Congratulations."
)
comment9 = Comment.create!(
    author_id: user21.id,
    post_id: post4.id,
    body: "Congratulations."
)
comment10 = Comment.create!(
    author_id: user9.id,
    post_id: post4.id,
    body: "Congratulations."
)

comment11 = Comment.create!(
    author_id: user4.id,
    post_id: post4.id,
    body: "Congratulations."
)

comment12 = Comment.create!(
    author_id: user6.id,
    post_id: post4.id,
    body: "Congratulations."
)

comment13 = Comment.create!(
    author_id: user16.id,
    post_id: post4.id,
    body: "Congratulations."
)

comment14 = Comment.create!(
    author_id: user20.id,
    post_id: post4.id,
    body: "Congratulations."
)

comment15 = Comment.create!(
    author_id: user21.id,
    post_id: post4.id,
    body: "Congratulations."
)

like1 = Like.create(
    liker_id: user5.id,
    likeable_item: "Post",
    likeable_id: post1.id
)
like2 = Like.create(
    liker_id: user4.id,
    likeable_item: "Post",
    likeable_id: post1.id
)

like3 = Like.create(
    liker_id: user7.id,
    likeable_item: "Post",
    likeable_id: post1.id
)

like4 = Like.create(
    liker_id: user10.id,
    likeable_item: "Post",
    likeable_id: post1.id
)

like5 = Like.create(
    liker_id: user11.id,
    likeable_item: "Post",
    likeable_id: post1.id
)

like6 = Like.create(
    liker_id: user2.id,
    likeable_item: "Post",
    likeable_id: post2.id
)

like7 = Like.create(
    liker_id: user11.id,
    likeable_item: "Post",
    likeable_id: post2.id
)

like8 = Like.create(
    liker_id: user12.id,
    likeable_item: "Post",
    likeable_id: post2.id
)

like9 = Like.create(
    liker_id: user11.id,
    likeable_item: "Post",
    likeable_id: post7.id
)
like10 = Like.create(
    liker_id: user20.id,
    likeable_item: "Post",
    likeable_id: post6.id
)
like11 = Like.create(
    liker_id: user20.id,
    likeable_item: "Post",
    likeable_id: post4.id
)
like12 = Like.create(
    liker_id: user2.id,
    likeable_item: "Post",
    likeable_id: post4.id
)
like13 = Like.create(
    liker_id: user10.id,
    likeable_item: "Post",
    likeable_id: post4.id
)
like14 = Like.create(
    liker_id: user11.id,
    likeable_item: "Post",
    likeable_id: post4.id
)
# connection1 = Connection.create!(
#     connectee_id: demo_user.id,
#     connector_id: user1.id,
#     accepted: true
# )
connection2 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user2.id,
    accepted: true
)
connection3 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user3.id,
    accepted: true
)
connection4 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user4.id,
    accepted: true
)
connection5 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user5.id,
    accepted: true
)
connection6 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user6.id,
    accepted: true
)
connection7 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user7.id,
    accepted: true
)
connection8 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user8.id,
    accepted: true
)
connection9 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user9.id,
    accepted: true
)
connection10 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user10.id,
    accepted: true
)

connection11 = Connection.create!(
    connectee_id: user11.id,
    connector_id: demo_user.id,
    accepted: true
)

connection12 = Connection.create!(
    connectee_id: user12.id,
    connector_id: demo_user.id,
    accepted: true
)

connection13 = Connection.create!(
    connectee_id: user13.id,
    connector_id: demo_user.id,
    accepted: true
)

connection14 = Connection.create!(
    connectee_id: user14.id,
    connector_id: demo_user.id,
    accepted: true
)

connection15 = Connection.create!(
    connectee_id: user5.id,
    connector_id: demo_user.id,
    accepted: true
)

connection16 = Connection.create!(
    connectee_id: user19.id,
    connector_id: demo_user.id,
    accepted: true
)

connection17 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user11.id,
    accepted: true
)
connection18 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user12.id,
    accepted: true
)
connection19 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user13.id,
    accepted: true
)
connection20 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user14.id,
    accepted: true
)
# connection21 = Connection.create!(
#     connectee_id: demo_user.id,
#     connector_id: user1.id,
#     accepted: true
# )
connection22 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user16.id,
    accepted: true
)
connection23 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user17.id,
    accepted: true
)
connection24 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user18.id,
    accepted: true
)
connection25 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user19.id,
    accepted: true
)
connection26 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user20.id,
    accepted: true
)

connection27 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user21.id,
    accepted: true
)
connection28 = Connection.create!(
    connectee_id: demo_user.id,
    connector_id: user22.id,
    accepted: true
)
# connection29 = Connection.create!(
#     connectee_id: demo_user.id,
#     connector_id: user23.id,
#     accepted: true
# )
# connection30 = Connection.create!(
#     connectee_id: demo_user.id,
#     connector_id: user24.id,
#     accepted: true
# )
# connection31 = Connection.create!(
#     connectee_id: demo_user.id,
#     connector_id: user25.id,
#     accepted: true
# )
# connection32 = Connection.create!(
#     connectee_id: demo_user.id,
#     connector_id: user26.id,
#     accepted: true
# )
# connection33 = Connection.create!(
#     connectee_id: demo_user.id,
#     connector_id: user27.id,
#     accepted: true
# )
