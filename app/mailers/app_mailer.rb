class AppMailer < ActionMailer::Base
  default from: "jdkealy@gmail.com"
  def contact(parms)
    @inquiry = parms['inquiry']
    @from    = parms['email']
    mail(:to => 'jdkealy@gmail.com', :subject => "NEW INQUIRY")
  end
end
