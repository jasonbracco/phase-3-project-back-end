class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/shoes" do
    shoes=Shoe.all 
    shoes.to_json
  end

  patch '/shoes/:id' do 
    shoe=Shoe.find(params[:id])
    shoe.update(
      nickname: params[:nickname],
      size: params[:size],
      color: params[:color],
      price: params[:price],
      image_url: params[:image_url] 
    )
    shoe.to_json
  end

  post '/shoes' do 
    shoe=Shoe.create(
      nickname: params[:nickname],
      size: params[:size],
      color: params[:color],
      price: params[:price],
      image_url: params[:image_url]
    )
    shoe.to_json
  end

  delete '/shoes:id' do 
    shoe=Shoe.find(params[:id])
    shoe.destroy
    shoe.to_json
  end

end
