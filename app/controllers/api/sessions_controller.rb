class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        
        if @user.nil?
            render json: ["Invalid credentials"], status: 401 
        else  
            login!(@user)
            render 'api/users/show.json.jbuilder'
        end
    end 

    def destroy 
        if current_user.nil? 
            render json: ["There is no current user to logout"], status: 404
        end
        logout!
        render json: {}
    end 
end
