class Api::LikesController < ApplicationController
    def index 
        @likes = Like.all
        render :index
    end

    def create 
        @like = Like.new(like_params)
        @like.liker_id = current_user.id
        if @like.save 
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def show 
        @like = Like.find(params[:id])
        render :show
    end

    def destroy 
        @like = Like.find(params[:id])
        @like.destroy
        render :show
    end

    private 

    def like_params 
        params.require(:like).permit( :liker_id, :likeable_id, :likeable_item);
    end
end
