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
      log_in(@shelter)
      render 'api/shelters/show'
    else
      render json: @shelter.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def shelter_params
    params.require(:shelter).permit(
    :shelter_name, :email, :address, :phone_number, :password)
  end

end
