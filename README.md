 ![](http://www.krossover.com/wp-content/themes/swatch/images/assets/krossover-logo.png)

# This is a sample app

## Your dev environment / running the app locally

> Note: The following instructions assume using a Mac.

You'll need Ruby and a few Ruby libraries, referred to as 'gems'.

Taken from the Ruby Wiki:

"Mac's with version 10.5 Leopard or higher already have Ruby and RubyGems installed, Ruby and RubyGems update instructions are [found here](http://homebrew.github.com/) at the Homebrew for OS X page, as well as instructions for adding Homebrew to your OS X machine if you do not already have it installed."

To get the leaderboard running locally, simply run the following

```bash

# install the bundler library/commands
gem install bundler

# download this project's dependencies
bundle install

# start the server
ruby app.rb

```

Finally, visit `http://localhost:4567/`, and you'll see:


<p align="center">
  <img src="https://i.imgur.com/9bbjz6O.png">
</p>

## Some info about the files and folders

- **public/** - static assets
  - **app.js** - JavaScript that powers the AJAX
- **views/** - HTML and embedded Ruby logic
- **app.rb** - configuration, endpoints


