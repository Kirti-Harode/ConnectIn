class Api::UsersController < ApplicationController

    def index 
        @users = User.all
    end

    def create 
        @user = User.new(user_params);
        if @user.save
            demo_user = User.find_by(email: 'kirti@gmail.com')
            login!(@user)
            render :show 
        else 
            render json: @user.errors.full_messages, status: 401
        end
    end 

    def show 
        @user = User.find(params[:id])
        # debugger
    end

    def update 
        @user = User.find(params[:id])
        # debugger

        if @user.update(user_params)
            render :show
            # debugger

        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private 
    def user_params 
        params.require(:user).permit(:email, :password, :fname, :lname, :bio, :pronouns, :location, :profile_photo)
    end
end
