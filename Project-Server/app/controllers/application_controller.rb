class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/shoes" do
    shoes=Shoe.all 
    shoes.to_json
  end

end
