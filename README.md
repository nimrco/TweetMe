# TweetMe

An asynchronous REST service for basic Twitter operations such as tweeting, get a user timeline, delete a tweet, etc.


## Tweet a message
POST /tweet</br>
status="hi Twitter"

## Get a list of tweets
GET /list

## Delete a tweet
POST /deletetweet/some_tweet_id

## Like a tweet
POST /like</br>
id="1234"

## Unlike a tweet
POST /unlike</br>
id="1234"

## Retweet
POST /retweet/some_tweet_id
