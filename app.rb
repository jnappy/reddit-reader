require 'sinatra'
require 'pry'
require 'httparty'



get "/" do 
	erb :index
end 

post "/results" do 
	subreddit = params['subreddit']
	returned_results = HTTParty.get("http://reddit.com/r/#{subreddit}.json")
	@posts = returned_results['data']['children']
	binding.pry
	erb :results
end

