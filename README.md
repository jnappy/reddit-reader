# Sinatra Practice

## Description

> Note: The following instructions assume using a Mac.

You'll need Ruby and a few Ruby libraries, referred to as 'gems'.

Taken from the Ruby Wiki:

"Mac's with version 10.5 Leopard or higher already have Ruby and RubyGems installed, Ruby and RubyGems update instructions are [found here](http://homebrew.github.com/) at the Homebrew for OS X page, as well as instructions for adding Homebrew to your OS X machine if you do not already have it installed."


To get your server started, simply run the following:


```bash

# install the bundler library/commands
$ gem install bundler

# download this project's dependencies
$ bundle install

# start the server
$ ruby app.rb

```

Finally, visit `http://localhost:4567/`, and you'll have a local server!  You should see a blank page. 


#### Some info about the files and folders

- **views/** - HTML and embedded Ruby logic
- **app.rb** - configuration, endpoints, Ruby logic to make it work


## Requirements of this exercise

There is commented code in each of the files referenced below.  Do not change the source code but use the following directions to add to it.

1. In `views/index.html`, create:

	- a form with a POST method and an action of `/results`
	- an input element in the form with an id and name of `subreddit`

2. In `app.rb` have the `/` endpoint load the `index.html` file

3. Also in the `app.rb` file, in the the `/results` endpoint:

		- using the params hash, store the subreddit key value in a variable called "subreddit"
		- send a get request to "http://reddit.com/r/#{subreddit}.json" using the ruby gem [HTTParty](https://github.com/jnunemaker/httparty) and store the results of the request in a variable called `returned_results`
		- load the `results.erb` 

4. Use an `img` tag to make it so the URL in the `results.erb` is shown as a picture in the HTML 


## Deliverable

The form should look like this: 

<p align="center">
	<img src="https://i.imgur.com/FMm94N2.png">
</p>

...and on submit:

<p align="center">
	<img src="https://i.imgur.com/rEjJy3N.png">
</p>



## Resources

- The official [Sinatra](http://www.sinatrarb.com/documentation.html) docs
- Read up on [HTTParty](https://github.com/jnunemaker/httparty)
- How about pushing to [Heroku](https://devcenter.heroku.com/articles/rack)?
