class HomeController < ApplicationController
  def index
  end
  def contact
  end
  def submit_inquiry
    #AppMailer.contact(params).deliver
    flash[:notice] = "Thanks for your inquiry! I'll get back to you as soon as I can!"
    redirect_to :back
  end
end
