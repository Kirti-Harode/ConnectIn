class Api::ExperiencesController < ApplicationController
    def index 
        @experiences = Experience.where(user_id: params[:userId])
    end

    def create 
        @experience = Experience.new(experience_params)
        if @experience.save 
            render :show 
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def update 
        @experience = Experience.find(params[:id])
        if @experience.update(experience_params)
            render :show 
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def destroy 
        @experience = Experience.find(params[:id])
        @experience.destroy 
        render :show
    end

    private 

    def experience_params 
        params.require(:experience).permit(:user_id, :title, :company, :employment_type, :location, :start_date, :end_date, :headline, :industry, :description)
    end
    
end
