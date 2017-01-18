class Api::PetsController < ApplicationController

  def new
    @pet = Pet.new
  end

  def show
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = ENV['UPLOAD_PRESET']
    @pet = Pet.find(params[:id])
  end

  def index
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = ENV['UPLOAD_PRESET']
    @pets = Pet.all
  end

  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      render :show
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  def update
    @pet = Pet.find(params[:id])

    if @pet.update(pet_params)
      render :show
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  def destroy
    @pets = Pet.all
    @pet = Pet.find(params[:id])
    @pet.destroy
    render :show
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :pet_type, :age, :breed, :gender,
                                :pet_image, :description, :shelter_id)
  end
end
