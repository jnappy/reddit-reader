require 'sinatra'
require 'pry'
require 'httparty'

get "/" do 
   erb :index
end 

post "/results" do
	binding.pry # look at what you have for 'params'

	#3. store the subreddit value in a variable called "subreddit"

	#4.send a get request to "http://reddit.com/r/#{subreddit}.json" using the ruby gem 
	# HTTParty and store it in a variable called returned_results


	@posts = returned_results['data']['children']

	#5. load the results page 
end

