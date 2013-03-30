class HomeController < ApplicationController
  def index
  end
  def contact
  end
  def submit_inquiry
    f = verify_recaptcha :private_key => '6Le6Kd8SAAAAAFBkkaSSAKnFL5sHu4-3O5ZD11H_'
    if f
      AppMailer.contact(params).deliver
      flash[:notice] = "Thanks for your inquiry! I'll get back to you as soon as I can!"
      redirect_to :back
    else
      flash[:error] = "Captcha value incorrect"
      redirect_to :back
    end
  end
end
