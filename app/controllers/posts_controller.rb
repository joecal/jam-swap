class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update]

  def index
    respond_to do |format|
      format.html
      format.json{ render json: Post.all }
    end
  end

  def show
  end

  def edit
  end

  def create
    @post = Post.create(post_params)
    render json: @post, status: :ok
  end

  def update
    @post.update!(post_params)
    render json: @post, status: :ok
  end

  def destroy
    Post.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :description)
    end
end
