class Api::CommentsController < ApplicationController

    def index 
        @comments = Comment.all
        render :index
    end

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save 
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def show 
        @comment = Comment.find(params[:id])
        render :show
    end

    def update 
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params) 
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])
        @comment.destroy
        render :show
    end

    private 

    def comment_params 
        params.require(:comment).permit(:body, :author_id, :post_id);
    end
end
