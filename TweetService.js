const Twitter = require('twitter');
const config = require('./config.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const myTwitter = new Twitter(config);
const textParser = bodyParser.text();
//const tweetCount = 5; // change it to optimize paging. max value=200

// Tweet a message
app.post('/tweet', textParser, function (req, res) {
        myTwitter.post('statuses/update',{status: req.body}, function (err, tweet, response) {
            if (err) {
                console.error(err);
            }
            console.log(tweet);
            res.end(JSON.stringify(response));
        });
});

// Get list of tweets
app.get('/list', async (req, res) => {
    const userResponse = await myTwitter.get('account/verify_credentials', {skip_status: true});
    const  id = userResponse.id_str;
    let tweetList = await myTwitter.get('statuses/user_timeline', {user_id: id});
    console.log(tweetList);
    res.end(JSON.stringify(tweetList));
});

// Retweet a tweet
app.post('/retweet/:id', textParser, function (req, res) {
    myTwitter.post('statuses/retweet/' + req.params.id, {},function (err, tweet, response) {
        if (err) {
            console.error(err);
        }
        console.log(tweet);
        res.end(JSON.stringify(response));
    });
});

// Like a tweet
app.post('/like', textParser, function (req, res) {
    myTwitter.post('favorites/create', {id: req.body}, function (err, response) {
        if (err) {
            console.error(err);
        }
        res.end(JSON.stringify(response));
    });
});

// Delete a tweet
app.post('/deletetweet/:id', textParser, function (req, res) {
    myTwitter.post('statuses/destroy/' + req.params.id, {}, function (err, response) {
        if (err) {
            console.error(err);
        }
        res.end(JSON.stringify(response));
    });
});

// Unlike a tweet
app.post('/unlike', textParser, function (req, res) {
    myTwitter.post('favorites/destroy', {id: req.body}, function (err, response) {
        if (err) {
            console.error(err);
        }
        res.end(JSON.stringify(response));
    });
});

// Init server
app.listen(config.port, function () {
    console.log("server listening at http://%s:%s", config.host, config.port);
});