class Api::SheltersController < ApplicationController

  def new
    @shelter = Shelter.new
  end

  def show
    @shelter = Shelter.find(params[:id])
  end

  def create
    @shelter = Shelter.new(shelter_params)

    if @shelter.save
      render 'api/shelters/show'
    else
      render json: @shelter.errors.full_messages, status: 422
    end
  end

  def update
    @shelter = Shelter.update(shelter_params)

    if @shelter.save
      render 'api/shelters/show'
    else
      render json: @shelter.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelter = shelter.find(params[:id])
    @shelter.destroy
    render 'api/users/show'
  end

  private

  def shelter_params
    params.require(:shelter).permit(
    :shelter_name, :email, :address, :phone_number, :user_id)
  end

end
