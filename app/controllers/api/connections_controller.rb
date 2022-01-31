class ConnectionsController < ApplicationController

    def index 
        @connections = Connection.where(connectee_id: params[:userId])
        render :index
    end
    
    def show
        @connection = Connection.find(params[:id])
    end

    def create 
        @connection = Connection.new(connection_params)
        if @connection.save
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
        end
    end

    def destroy 
        @connection = Connection.find(params[:id])
        @connection.destroy
        render :show
    end

    private
    def connection_params 
        params.require(:connection).permit(:connector_id, :connectee_id, :accepted)
    end
end
