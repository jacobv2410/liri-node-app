require("dotenv").config();
var inq = require('inquirer')
var pmpt = inq.createPromptModule()



var spotify = process.env.SPOTIFY_ID
var client = process.env.TWITTER_ACCESS_TOKEN_KEY

var omdbKey = process.env.OMDB_API_KEY

// console.log(spotify, client, omdbKey)

// question constructors

// Variables to take in the command line information for each different API
var action = process.argv[2]
//should be in switch statements
var value = process.argv[3]


function Question (name, message) {
    this.type = 'input'
    this.name = name
    this.message = message
}

pmpt([new Question('preference', 'What would you like to do? Spotify, Twitter, OMDB?')]).then(function (r) {
    if (r.preference === 'OMDB') {
      console.log(getMovie)  
    }
    if (r.preference === 'Twitter') {
        // tried to call my tweets function from down below on this if statement and got an undefined. i am working to figure out how to correct this. 
        console.log(tweets)
    }
    else { console.log("ERROR! Improper Input Detected! Please make proper Selection.")}



var request = require('request');
var http = require('http');

// var movies = ['saw', 'titanic', 'toy story'];

// getMovie();


function getMovie() {

    var movie = "Pacific Rim"

    request("https://www.omdbapi.com/?apikey="+ process.env.OMDB_API_KEY +"&t=" + value, function (error, response, body) {
        if(error){
            console.log(error)
        }

        console.log(JSON.parse(body)['Title'])
        console.log(JSON.parse(body).Title)
        
    });
}

// console.log(TWITTER_CONSUMER_KEY);
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    console.log(error);
  }

//   console.log(tweets)
})

// i was not able to get the spotify working yet. i will continue to work on this. i took out my code i had in there for ease of reading. will put back in as i get it working. 
})