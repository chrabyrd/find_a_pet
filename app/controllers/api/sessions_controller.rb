class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render './api/users/show'
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout_out_user
      render './api/users/show'
    else
      render json: ['Not Logged In'], status: 404
    end
  end
end
