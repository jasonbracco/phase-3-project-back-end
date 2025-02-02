require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add routes here
  get "/shoes" do
    shoes=Shoe.all
    shoes.to_json(include: {brand: {only: [:brand_name]}})
  end

  patch "/shoes/:id" do 
    shoe=Shoe.find(params[:id])
    shoe.update(
      nickname: params[:nickname],
      size: params[:size],
      color: params[:color],
      price: params[:price],
      image_url: params[:image_url] 
    )
    shoe.to_json(include: {brand: {only: [:brand_name]}})
  end

  post "/brands/:id/shoes" do 
    shoe=Shoe.create(
      nickname: params[:nickname],
      brand_id: params[:id],
      size: params[:size],
      color: params[:color],
      price: params[:price],
      image_url: params[:image_url],
      use: params[:use]
    )
    shoe.to_json(include: {brand: {only: [:brand_name]}})
  end

  delete "/shoes/:id" do 
    shoe=Shoe.find(params[:id])
    shoe.destroy
    shoe.to_json
  end

  get "/brands" do 
    brands=Brand.all
    brands.to_json
  end

  post "/brands" do 
    brand=Brand.create(
      brand_name: params[:brand_name],
    )
    brand.to_json
  end

end
