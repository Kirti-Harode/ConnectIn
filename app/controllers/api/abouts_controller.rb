class Api::AboutsController < ApplicationController
    def index 
        @abouts = About.where(user_id: params[:userId])
    end

    def create 
        @about = About.new(about_params)
        if @about.save 
            render :show 
        else
            render json: @about.errors.full_messages, status: 422
        end
    end

    def update 
        @about = About.find(params[:id])
        if @about.update(about_params)
            render :show 
        else
            render json: @about.errors.full_messages, status: 422
        end
    end

    def destroy 
        @about = About.find(params[:id])
        @about.destroy 
        render :show
    end

    private 

    def about_params 
        params.require(:about).permit(:user_id, :body)
    end

end
