class Api::PetImagesController < ApplicationController

  def new
    @pet_image = PetImage.new
  end

  def show
    @pet_image = PetImage.find(params[:id])
  end

  def create
    @pet_image = PetImage.new(pet_image_params)

    if @pet_image.save
      render 'api/pet_images/show'
    else
      render json: @pet_image.errors.full_messages, status: 422
    end
  end

  def update
    @pet_image = PetImage.find(params[:id])

    if @pet_image.update(pet_image_params)
      render 'api/pet_images/show'
    else
      render json: @pet_image.errors.full_messages, status: 422
    end
  end

  def destroy
    @pet_image = PetImage.find(params[:id])
    @pet_image.destroy
    render 'api/pets/show'
  end

  private

  def pet_image_params
    params.require(:pet_image).permit(:title, :url, :description, :pet_id)
  end
end
