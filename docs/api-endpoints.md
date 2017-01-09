# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:user_id`
- `DELETE /api/users/:user_id`

### Watchlists

- `GET /api/users/:user_id/watchlist`
- `POST /api/users/:user_id/watchlist`
- `GET /api/users/:user_id/watchlist/:watchlist_id`
- `PATCH /api/users/:user_id/watchlist/:watchlist_id`
- `DELETE /api/users/:user_id/watchlist/:watchlist_id`

## Shelters

- `POST /api/shelters`
- `PATCH /api/shelters`
- `GET /api/shelters/:shelter_id`
- `DELETE /api/shelters/:shelter_id`

## Messages

- `GET /api/users/:user_id/messages`
- `POST /api/users/:user_id/messages`
- `GET /api/users/:user_id/messages/:message_id`
- `DELETE /api/users/:user_id/messages/:message_id`

### Pets

- `GET /api/shelters/:shelter_id/pets`
- `POST /api/shelters/:shelter_id/pets`
- `GET /api/shelters/:shelter_id/pets/:pet_id`
- `DELETE /api/shelters/:shelter_id/pets/:pet_id`

### Images

- `GET /api/shelters/:shelter_id/pets/images`
- `POST /api/shelters/:shelter_id/pets/images`
- `GET /api/shelters/:shelter_id/pets/:pet_id/images/:image_id`
- `DELETE /api/shelters/:shelter_id/pets/:pet_id/images/:image_id`

### Session

- `POST /api/session`
- `DELETE /api/session`
