class Api::PetsController < ApplicationController

  def new
    @pet = Pet.new
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def index
    @pets = Pet.all
  end

  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      render 'api/pets/show'
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  def update
    @pet = Pet.find(params[:id])

    if @pet.update(pet_params)
      render "api/pets/show"
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  def destroy
    @pets = Pet.all
    @pet = Pet.find(params[:id])
    @pet.destroy
    render 'api/pets/index'
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :pet_type, :age, :breed, :gender,
                                :description, :shelter_id)
  end
end
