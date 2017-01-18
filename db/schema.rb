# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170117223254) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pet_images", force: :cascade do |t|
    t.string   "url",         null: false
    t.string   "title"
    t.text     "description"
    t.integer  "pet_id",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "pet_images", ["pet_id"], name: "index_pet_images_on_pet_id", using: :btree

  create_table "pets", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "pet_type",    null: false
    t.integer  "age",         null: false
    t.string   "breed",       null: false
    t.string   "gender",      null: false
    t.text     "description"
    t.integer  "shelter_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "pet_image"
  end

  add_index "pets", ["age"], name: "index_pets_on_age", using: :btree
  add_index "pets", ["breed"], name: "index_pets_on_breed", using: :btree
  add_index "pets", ["gender"], name: "index_pets_on_gender", using: :btree
  add_index "pets", ["pet_type"], name: "index_pets_on_pet_type", using: :btree
  add_index "pets", ["shelter_id"], name: "index_pets_on_shelter_id", using: :btree

  create_table "shelters", force: :cascade do |t|
    t.string   "shelter_name",  null: false
    t.string   "email",         null: false
    t.string   "address",       null: false
    t.string   "phone_number",  null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id",       null: false
    t.string   "shelter_image"
  end

  add_index "shelters", ["address"], name: "index_shelters_on_address", unique: true, using: :btree
  add_index "shelters", ["email"], name: "index_shelters_on_email", unique: true, using: :btree
  add_index "shelters", ["shelter_name"], name: "index_shelters_on_shelter_name", unique: true, using: :btree
  add_index "shelters", ["user_id"], name: "index_shelters_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "user_image"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
