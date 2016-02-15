require 'sinatra'
require 'pry'
require 'httparty'

get "/" do 
   # 2. load the index page
end 

post "/results" do
	#3. using the params hash, store the subreddit key value in a variable called "subreddit"

	#4.send a get request to "http://reddit.com/r/#{subreddit}.json" using the ruby gem 
	# HTTParty and store it in a variable called returned_results

	@posts = returned_results['data']['children']

	#5. load the results page 
end

