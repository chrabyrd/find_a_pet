class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logged_in?
    !current_user.nil?
  end

  def logout_out_user
    @user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  private

  def require_sign_in
    unless logged_in?
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
