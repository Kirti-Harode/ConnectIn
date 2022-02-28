class Api::PostsController < ApplicationController
    def index 
        @posts = Post.all
    end

    def create 
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save 
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show 
        @post = Post.find(params[:id]);
    end

    def update 
        @post = Post.find(params[:id])
        @post.author_id = current_user.id
        # debugger
        if @post.update(post_params) 
            # debugger
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy 
        @post = Post.find(params[:id])
        @post.destroy
        render :show
    end

    private 

    def post_params 
        params.require(:post).permit( :body, :author_id, :media);
    end
end
