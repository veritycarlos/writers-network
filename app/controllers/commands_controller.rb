class CommandsController < ApplicationController
    before_action :authorize  

    def index
        commands = current_user.commands
        render json: commands
    end 

    def create
        command = current_user.commands.create(command_params) # validations run when it's saved (methods that save: create, save, update)
        if command.valid?
            render json: command
        else 
            render json: { errors: command.errors.full_messages }, status: :unprocessable_entity  
        end 
    end 

    def show
        command = current_user.commands.find_by(id: params[:id])
        if command
            render json: command
        else 
            render json: { error: "Not Found" }, status: :unauthorized  
        end 
    end 

    # def destroy

    # end 

    # def update

    # end 

    private 

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def command_params
        params.permit(:name, :language, :usage)
    end 

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id 
    end 
end
