require 'sinatra'
require 'pry'
require 'httparty'

get "/" do
   # 2. load the index page
	 erb :index
end

post "/results" do
	#3. using the params hash, store the subreddit key value in a variable called "subreddit"
	@subreddit = params
  sub = params['sub']

	#4.send a get request to "http://reddit.com/r/#{subreddit}.json" using the ruby gem

  returned_results = HTTParty.get("http://reddit.com/r/#{sub}.json")

	# HTTParty and store it in a variable called returned_results

	@posts = returned_results['data']['children']

	#5. load the results page
	erb :results
end

get '/newpost' do
  erb :newpost
end
