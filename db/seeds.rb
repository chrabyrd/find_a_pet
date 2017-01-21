# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'Demo Account', email: 'demo_account@demo.com', user_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484946606/ojfqbkgaldxeo9b8eddj.jpg", password: 'password')
User.create(username: 'Richard', email: 'demo1@demo.demo', user_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484638109/site-logo.png", password: 'password')

Shelter.create(shelter_name: 'Pike Animal Shelter', email: 'pike_shelter@gmail.com', address: '2141 26th Street, San Francisco CA, 94107', phone_number: '731-555-4107', shelter_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484946169/b9jnpvnnbxk6lce4bz0s.jpg", user_id: '1')
Shelter.create(shelter_name: 'Tri-City Animal Shelter', email: 'TriCityShelter@yahoo.com', address: '160 Spear Street, San Francisco CA, 92408', phone_number: '615-555-7738', shelter_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484946281/oecojcekrcoo9xc7xnao.jpg", user_id: '1')
Shelter.create(shelter_name: 'Happy Paws Adoption Center', email: 'happy-paws@happypaws.com', address: '1233 3rd Street, San Francisco CA, 95608', phone_number: '407-383-0430', shelter_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484946414/ymgvqs74dhfqmcaqaqpj.jpg", user_id: '2')


Pet.create(name: 'Zeke', pet_type:'dog', age: '3', breed: 'Pit Bull Terrier', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484789083/qfpycczzgszerj46d4pk.jpg", shelter_id:'1', description:"Zeke is an active and enthusiastic pup who is very people social and loves to play. This happy fellow is stunningly handsome in his brown and gray brindle coat. A family with kids 12 years and older might be fine for Zeke -- come meet him and see if it is a good fit. Zeke's adoption also includes a Welcome Home Gift Package with toys, treats and more!")
Pet.create(name: 'Sarah', pet_type:'dog', age: '2', breed: 'Border Collie', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484887839/u4pul1dz8jt7ulhgvkuz.jpg", shelter_id:'2', description:"You can fill out an adoption application online on our official website.")
Pet.create(name: 'Pumpkin', pet_type:'dog', age: '3', breed: 'Golden Retriever', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484887902/ejq8aredfumuriyzuiro.jpg", shelter_id:'1', description:"Pumpkin is a lovely mama's boy who'd be thrilled to go home with is mom Bella, but could also make a good companion to another small dog. This cutie pie is looking for experienced adopters who enjoy kisses and walks on leash. A family with kids 5 years or older might be fine for Pumpkin -- come meet him and see if it's a good fit.")
Pet.create(name: 'Nipsey', pet_type:'dog', age: '4', breed: 'Shiba Inu', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484887924/lp7abpvesstdgqxl08kk.jpg", shelter_id:'3', description:"Nipsey is a gentle and sweet boy. He is also adorable with his lanky legs, bright big eyes and fun coloring. He will do best in a quiet home. A family with kids 8 years and older might be fine for Nipsey -- come meet him and see if it's a good fit.")
Pet.create(name: 'Gem', pet_type:'cat', age: '6', breed: 'Domestic Medium Hair', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484887945/zgnujojyyh1zipn2aoax.png", shelter_id:'1', description:"Looking for a friendly, fun, playful and interested-in-life-around-her kind of kitten? Meet Gem. This adorable girl with a sparkle in her eye and a nice white star on her chest is ready and waiting for a home of her own. She came to the shelter as a stray and it is puzzling that nobody came to claim her as she is such an outgoing and friendly kitten she must have belonged to someone. Add Gem to your life and see what a true treasure she is.")
Pet.create(name: 'Disco', pet_type:'dog', age: '8', breed: 'Basset Hound', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484887970/hphajithxuulk7dow6ra.jpg", shelter_id:'2', description:"Disco is awesome! This voluptuous gal certainly brings the party wherever she goes. She already knows sit and shake! A family with kids might be fine for Disco -- come meet her and see if it's a good fit. (this is one sweet and happy dog -- new photo coming to show her off better!)")
Pet.create(name: 'Abby', pet_type:'dog', age: '3', breed: 'Pit Bull Terrier', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484887991/tb2gfhjma8rlgbxk9ixj.jpg", shelter_id:'1', description:"Abbey was dumped at an Airbnb pregnant and nervous. She had four puppies a week later and has been a very doting mom. Now, Abbey and her pups are each now ready to find and be adopted by their new forever families! Abbey is a lovely, gentle, sweet, social and fun gal who enjoys walks on leash and playing with toys. Abbey already knows sit and can't wait to go to training classes with her adopters! Abbey's adopters should have previous dog experience. A family with kids 6 years or older might be fine for Abbey -- come meet her and see if it's a good fit. Abbey's Adoption includes a Welcome Home Gift Package with toys, treats and more!")
Pet.create(name: 'Khoi', pet_type:'guinea pig', age: '1', breed: 'Guinea Pig', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888011/bxubnx0vsghlvhwqcle6.jpg", shelter_id:'3', description:"Wes and Khoi are a couple of sweet young boy Guinea Pigs. They are nice, friendly and easy to handle. Khoi makes fun little GP sounds and they both have fabulous hair-dos with great colors and cowlicks and whirls. Come meet Wes and Khoi and see if these are the pigs for you and opt to adopt.")
Pet.create(name: 'Booyang', pet_type:'dog', age: '2', breed: 'Papillion', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888031/wfdqvrmijhvdeyzdrbaa.jpg", shelter_id:'1')
Pet.create(name: 'Pasha', pet_type:'dog', age: '4', breed: 'Spitz', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888058/kzqvvbfffpr6amwlyoxp.jpg", shelter_id:'2', description:"Pasha is an active and curious girl who will benefit from mental and physical activity. She has bright eyes and a lovely brindle coat and a tail that likes to wag, wag, wag! A family with kids 10 years or older might be fine for Pasha -- come meet her and see if it's a good fit. Adopt Pasha now and receive a Welcome Home Gift Package with toys, treats and more!")
Pet.create(name: 'Belle', pet_type:'dog', age: '8', breed: 'Pekingese', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888083/cuvjpqnvlpyugndyzubn.jpg", shelter_id:'1', description:"Belle is a sassy, full-figured girl who can be a bit insecure at first around new people. She is making leaps and bounds in becoming more comfortable and out going here at the shelter. She is looking for an adults-only home to make her very own.")
Pet.create(name: 'Tim', pet_type:'dog', age: '2', breed: 'Chocolate Lab', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888106/qowndt9g3wqpnelyozid.jpg", shelter_id:'3', description:"Tim comes to us from the streets of Mexico. He made the long journey to San Francisco to find an amazing new family. If you are interested in meeting Tim, please fill out an application and we will find some time for you to meet.")
Pet.create(name: 'Sugar', pet_type:'dog', age: '1', breed: 'Bulldog', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484897580/hwjm4wmy6dsxeyiq8xlo.jpg", shelter_id:'1', description: "Meet Sugar. He is as sweet as sugar and coming to us from Salinas, California. Sugar is a 51 pound Husky that is about 1 and half years old. He is full of loving energy and cuddles. He is friendly with new people and always has a kiss ready for you. If you are interested in meeting this amazing dog, fill out an application and we will set up a meeting with beautiful Sugar.")
Pet.create(name: 'Kenzi', pet_type:'dog', age: '3', breed: 'Corgi', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888155/jgxujdlpwimlfrbdbsbl.jpg", shelter_id:'2')
Pet.create(name: 'Linus', pet_type:'cat', age: '5', breed: 'Domestic Short Hair', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888176/jeghlye3j8pcxoifgeef.jpg", shelter_id:'1', description:"Linus is a calm and mellow gentleman of a cat. He is friendly and affectionate and super handsome, too. He had flea allergy issues and his skin is recovering so he might feel a bit crunchy until fully healed but he loves to be petted and is fond of laps and his skin and fur will be lovely and worth the wait. Come meet Linus and see if this nice tall boy is the one for you. new photo to come . . . unless he gets adopted first!")
Pet.create(name: 'Natasha', pet_type:'dog', age: '5', breed: 'Toy Poodle', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888202/cqn87nais4tdmb3xoxb5.jpg", shelter_id:'3', description:"She is a sweet girl who comes to us from the streets of Mexico. She is around 2 years old and about 12 pounds. If you are interested in meeting this sweet lady, please fill out an application and we can set up time for you to meet.")
Pet.create(name: 'Rufus', pet_type:'dog', age: '6', breed: 'Saint Bernard', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888224/abjyqazuo0oivzfuleq2.jpg", shelter_id:'3', description:"Rufus is a BFF in the making -- he just needs to find his other half! This silly, playful fellow is a total lovebug and enjoys playing with toys and taking long walks around town. Rufus is looking for experienced adopters who will take him to training classes. A family with other dogs or kids 10 years or older might be fine for Rufus -- come meet him and see if it's a good fit. Rufus' Adoption Fee now Waived to Qualified Adopter(s) thanks to a generous donor AND includes a Welcome Home Gift Package with toys, treats and more!")
Pet.create(name: 'Cozette', pet_type:'hedgehog', age: '1', breed: 'Hedgehog', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888251/abz1twumfgbsv6nxjahp.jpg", shelter_id:'1', description:"Cozette is a fun, friendly and easy to handle big hedgehog. She is ready for a home of her own after coming to the shelter as a stray. She is aorable, too, with her deep dark eyes and her creamy fur. Give Cozette a forever home.")
Pet.create(name: 'Peter', pet_type:'dog', age: '2', breed: 'Doberman', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888274/b4ac6chls6kxgg0o0lox.jpg", shelter_id:'2', description:"This amazing guy made the long trip form Mexico to find an amazing family in California. He is sweet with new people and other dogs. If you are interested in meeting this special man, please fill out an application and we will find time for you to meet.")
Pet.create(name: 'Tabasco', pet_type:'dog', age: '1', breed: 'Mastiff', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888300/mrpyfluntqknw8a4y7sg.jpg", shelter_id:'1', description:"Meet Tabasco, this is one of the amazing T puppies. They came to us from Stockton, California with their loving mother Teresa. They have been growing and exploring the world here with Family Dog Rescue. They are ready to branch out and find forever homes. If you are interested in meeting any of the T puppies, please fill out an application and we will set up a time for everyone to meet.")
Pet.create(name: 'Montana', pet_type:'dog', age: '2', breed: 'Schnauzer', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888320/wttaj9kvbubza05so3su.jpg", shelter_id:'3', description:"We don't know much about her past, but Montana is clearly afraid of other dogs and is under-socialized. She tends to bark and lunge at other dogs when on leash, but is happy to meet them off leash. Once she knows the other dog is 'safe' she is happy to socialize and interact. Dog parks are not a good option for her at this time.")
Pet.create(name: 'Tonka', pet_type:'dog', age: '7', breed: 'Irish Wolfhound', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888342/onvhrgvdfit6pinnfgyx.jpg", shelter_id:'1', description:"Even though they just arrived to our shelter recently, Tonka and Nikka are already staff and volunteer favorites. They are very sweet and affectionate for northern breed dogs. They enjoy meeting new people and love all the attention they get here. ")
Pet.create(name: 'Dani', pet_type:'cat', age: '10', breed: 'Domestic Medium Hair', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888362/saqt7fhbwmzjffuuohqg.jpg", shelter_id:'2', description:"Beautiful Dani is a super sweet and affectionate senior cat that is 10 years young. She is lovely and loving and waiting patiently for her new home. Dani is at the shelter because her person went into hospice and has nobody to take her. She is gentle and nice and someone will be fortunate to adopt and share a lifetime of laughter and love with her. Dani may take a little extra time to adjust to her new home but will be worth your extra TLC. Choose Dani and give her the golden years she deserves. Dani's Adoption Fee Waived to Qualified Adopter thanks to a generous donation by A wonderful SFACC shelter Cat Volunteer.")
Pet.create(name: 'Lucy', pet_type:'dog', age: '1', breed: 'Corgi', gender: 'Female', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888396/rnjjr41gh6jsdddl5m1b.jpg", shelter_id:'1', description:"She is an adorable and tiny little lady. She comes to us from Salinas, California. She is very friendly with people and other small dogs. She is around a year old and 5.4 pounds. If you are interested in meeting this sweet lady, fill out an application and we can set up time for you to meet.")
Pet.create(name: 'Rosco', pet_type:'dog', age: '6', breed: 'Olde English Bulldog', gender: 'Male', pet_image: "http://res.cloudinary.com/du9y1z3ol/image/upload/v1484888419/wz2kltvgxyscpssjwqfl.jpg", shelter_id:'3', description:"This big hunk of love is named Rosco! This sweet boy came to us recently from a rural shelter that was having trouble getting him adopted. Some people can't see past Rosco's 'scary' look, but at Family Dog Rescue these big bully breeds melt our hearts! We knew we wanted to help Rosco find a wonderful family, so we agreed to take him in.")
