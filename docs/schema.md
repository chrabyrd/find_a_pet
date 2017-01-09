# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
is_shelter      | boolean   | not null

## watchlists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique
type            | string    | not null, indexed
breed           | string    | not null, indexed
age             | integer   | not null, indexed
gender          | string    | not null, indexed
user_id         | integer   | not null, foreign key (references users), indexed

## pets
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | string    | not null
type         | string    | not null, indexed
breed        | string    | not null, indexed
age          | integer   | not null, indexed
gender       | string    | not null, indexed
description  | text      | not null
user_id      | integer   | not null, foreign key (references users), indexed
watchlist_id | integer   | not null, foreign key (references watchlists), indexed

## pets_images
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
url          | string    | not null
name         | string    | 
description  | text      |
pet_id       | integer   | not null, foreign key (references pets), indexed
