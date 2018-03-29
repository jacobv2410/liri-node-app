require("dotenv").config();

var spotify = process.env.SPOTIFY_ID
var client = process.env.TWITTER_ACCESS_TOKEN_KEY

var omdbKey = process.env.OMDB_API_KEY

// console.log(spotify, client, omdbKey)

// 

// Variables to take in the command line information for each different API


var action = process.argv[2]
//should be in switch statements
var value = process.argv[3]


var request = require('request');
var http = require('http');

// var movies = ['saw', 'titanic', 'toy story'];

// getMovie();

function getMovie() {

    request("https://www.omdbapi.com/?apikey="+ process.env.OMDB_API_KEY +"&t=" + value, function (error, response, body) {
        if(error){
            console.log(error)
        }

        // console.log(JSON.parse(body)['Title'])
        // console.log(JSON.parse(body).Title)
        
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

  console.log(tweets)
});



// function getMovies(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         request('https://www.omdbapi.com/?apikey=60f7bdd3&t=' + movies[i],
//         function(err, response, body) {
//             if (!err && response.statusCode === 200) {
//                 movies[i] = JSON.parse(body);
//                 var actors = JSON.parse(body)["Actors"];
//                 var releaseDate = JSON.parse(body)["Released"];
//                 var year = JSON.parse(body)["Year"];
//                 var poster = JSON.parse(body)["Poster"];
//                 console.log(releaseDate);
//                 console.log(movies[i]);
//             }
//         })
//     }
// }

// // we pass the body or data as myNYCDA to http servers
// // https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     movies.map((movie, i) => {
//         let poster = movies[i]["Poster"];
//         res.write('<div id="movie-container" style="margin: 0 auto; text-align: center"><img src=' + poster + '>');
//         res.write('<br><h1>' + movies[i]["Title"] + '</h1>');
//         res.write('<p><b>Release Date:</b> ' + movies[i]["Year"] + '</p>');
//         res.write('<p><b>Actors:</b> ' + movies[i]["Actors"] + '</p></div>');
//     })
//     res.end();
// }).listen(8080, function () {
//     console.log('Server has started ...');
// })

// getMovies(movies);

// 
// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// 

// var movie = require("./movie");
// var threeFavouriteMovies = [];
// threeFavouriteMovies.forEach(function(film){
//   // your code here
// })

//







// lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback)
// search: function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback)
// get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/ 

// var spotify = require('spotify');

// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }

    // Do something with 'data' 
// });

// var omdb = require('omdb');

// omdb.search('saw', function(err, movies) {
//     if(err) {
//         return console.error(err);
//     }

//     if(movies.length < 1) {
//         return console.log('No movies were found!');
//     }

//     movies.forEach(function(movie) {
//         console.log('%s (%d)', movie.title, movie.year);
//     });

//     // Saw (2004) 
//     // Saw II (2005) 
//     // Saw III (2006) 
//     // Saw IV (2007) 
//     // ... 
// });


/*
* This example shows how to search for a track. The endpoint is documented here:
* https://developer.spotify.com/web-api/search-item/
* Please note that this endpoint does not require authentication. However, using an access token
* when making requests will give your application a higher rate limit.
*/
// 
// package main

// import (
// 	"context"
// 	"fmt"
// 	"log"
// 	"os"

// 	"golang.org/x/oauth2/clientcredentials"

// 	"github.com/zmb3/spotify"
// )

// func main() {
// 	config := &clientcredentials.Config{
// 		ClientID:     os.Getenv("SPOTIFY_ID"),
// 		ClientSecret: os.Getenv("SPOTIFY_SECRET"),
// 		TokenURL:     spotify.TokenURL,
// 	}
// 	token, err := config.Token(context.Background())
// 	if err != nil {
// 		log.Fatalf("couldn't get token: %v", err)
// 	}

// 	client := spotify.Authenticator{}.NewClient(token)
// 	// search for playlists and albums containing "holiday"
// 	results, err := client.Search("holiday", spotify.SearchTypePlaylist|spotify.SearchTypeAlbum)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	// handle album results
// 	if results.Albums != nil {
// 		fmt.Println("Albums:")
// 		for _, item := range results.Albums.Albums {
// 			fmt.Println("   ", item.Name)
// 		}
// 	}
// 	// handle playlist results
// 	if results.Playlists != nil {
// 		fmt.Println("Playlists:")
// 		for _, item := range results.Playlists.Playlists {
// 			fmt.Println("   ", item.Name)
// 		}
// 	}
// }