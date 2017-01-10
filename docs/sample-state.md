# Sample State

```js

{
  session: {
    user: "John",
    errors: []
  },
  users: {
    id: 1,
    username: "I_like_pets"
    ...
  },
  shelters: {
    id: 1,
    shelter_name: "Happy Paws"
    ...
    pets: {
      1: {
        name: "Kenzi",
        type: "dog",
        breed: "mixed Corgi",
        age: "2 years",
        gender: "female",
        images: {
          id: 1,
          url: "www.imgur.com/something",
          title: "At the beach"
          description: "He's at the beach"
        }
        shelter_entrance_date: "12/1/2016",
        shelter_id: 1,
      }
    },

  }
  watchlists: {
    id: 1,
    title: "Older Terrier",
    filter: {
      type: "dog",
      breed: "Yorkshire Terrier",
      age: "5+ years",
      ...
    }
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPetProfile: {errors: ["needs a name"]}
  },
  messages: {
    1: {
      title: "RE: Adopt a Pet",
      body: "Stuff",
      shelter_id: 1,
    }
  },
  petFilters: [1, 4, 13] // Used to track selected options for filtering of pets
}

```
