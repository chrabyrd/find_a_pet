# Component Hierarchy

**AuthFormContainer**
- AuthForm

**UserHomeContainer**
- UserHome
  - SearchResultsContainer
    - SearchResults
  - WatchListContainer
    - WatchList

**MessageContainer**
- Message
- MessageIndex

**ShelterHomeContainer**
- ShelterHome
  - ProfileFormContainer
    - ProfileForm
  - SearchResultsContainer
    - SearchResults

**ProfileFormContainer**
- ProfileForm

**PetProfileContainer**
- PetProfile
  - PetImageContainer
    - PetImage
  - PetDetails

**PetImageContainer**
- PetImage

**WatchListContainer**
- WatchList
- WatchListForm

**SearchResultsContainer***
- PetProfileContainer
  - PetProfile

##Routes

| Path                                      | Component                
|-------------------------------------------|--------------------------
| "/sign-up"                                | "AuthFormContainer"      
| "/sign-in"                                | "AuthFormContainer"      
| "/user_home"                              | "UserHomeContainer"      
| "/user_home/messages"                     | "MessageContainer"       
| "/user_home/messages/:msgId"              | "MessageContainer"       
| "/user_home/watchlists"                   | "MessageContainer"       
| "/user_home/watchlists/:listId"           | "MessageContainer"       
| "/shelter_home"                           | "ShelterHomeContainer"   
| "/shelter_home/pets/createPet"            | "ProfileFormContainer"   
| "/shelter_home/pets/:petId"               | "PetProfileContainer"    
| "/shelter_home/pets/:petId/images"        | "PetImageContainer"      
| "/shelter_home/pets/:petId/images/:picID" | "PetImageContainer"      
| "/shelter_home/messages"                  | "MessageContainer"       
| "/shelter_home/messages/:msgId"           | "MessageContainer"       
| "/search-results"                         | "SearchResultsContainer"
