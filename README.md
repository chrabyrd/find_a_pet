#Find-A-Pet!

[Find-A-Pet! live][findapet]

Find-A-Pet is a full-stack web application inspired by PetFinder. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the front end. No external libraries were used in the styling of this application.

Please see the [docs][docs] folder for design documentation.

## Features & Implementation

### Users

I intend to visitors to this website to have as few steps as possible between them and adopting a pet. Therefore, the only important (and therefore required) columns are `username` and `email`, as well as `id`. Users are stored in a `users` table, and have complete backend and frontend authentication in place.  If a user chooses, he or she can create a `shelter` and through it create `pet` profiles. Users can have many `shelters`, which in turn can have many `pets`.

A list of users is stored in the state as an object with the `id` field as the key for each user. While it is important for the `session` component's state to carry user information, the `user` component is not rendered by any other component.

<p align="center">
  <img src="docs/screenshots/user_profile.png" alt="pet-index">
</p>

### Shelters

Shelters are stored in a `shelters` table. Important columns include `id`, `shelter_name`, `email`, `address`, `phone_number`, and `shelter_image`. All shelters can have multiple `pets`.

A list of shelters is stored in the state as an object with the `id` field as the key for each shelter. Shelters are rendered in two different components:

* `ShelterIndex`: This component is displayed on the user's profile page. It shows as a filtered index of shelters that the user is working in conjunction with.

* `ShelterDetails`: This is displayed when the user clicks on a certain shelter in the `ShelterIndex` component. It displays the shelter's basic information, along with a `ShelterForm`, `PetIndex`, and `PetForm`.

<p align="center">
  <img src="docs/screenshots/shelter_show.png" alt="shelter-index">
</p>

### Pets

Pets are stored in a `pets` table. Important columns include `id`, `name`, `type`, `breed`, `age`, `gender`, and `pet_image`. This table both belongs to, and is dependent upon the `shelters` table.

A list of pets is stored in the state as an object with the `id` field as the key for each pet. A specific pet's details are stored in the state as `PetDetails`. Pets are rendered in three different components:

* `PetIndex`: This component is displayed as both the website's homepage, and after the user searches for a pet through the `SearchBar`. Pets can be filtered by comparing its state with its props.

<p align="center">
  <img src="docs/screenshots/pet_index.png" alt="pet-index">
</p>

```ruby
  filterPet(pet) {
    if (pet.shelter_id === this.state.shelter_id || this.state.shelter_id === "") {
      return true;
    } else {
      return false;
    }
  }

  filterPetList() {
    const petList = this.props.pets.filter(pet => this.filterPet(pet));

    return (
     petList.map( pet => <PetIndexItemContainer key={`pet${pet.id}`} petDetails={pet} /> )
    );
  }
```

* `PetDetails`: This is displayed when the user clicks on a certain pet in the `ShelterIndex` component. It displays the pet's basic information, along with a `PetForm`

* `PetForm`: This is displayed as a modal when the user would like to create a new pet profile, or would like to update a current pet's profile.

<p align="center">
  <img src="docs/screenshots/pet_form.png" alt="pet-form">
</p>

### Search Bar

The search bar is currently not functional. It will allow users to filter the current index of pets by several parameters.


[findapet]: http://findapet.herokuapp.com
[docs]: ./docs
[seeds]: ./db/seeds.rb
[cloudinary]: http://cloudinary.com/
