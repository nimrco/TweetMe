
/* TO BE CONTINUED */

/*
const Twitter = require('twitter');
const config = require('./config.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const myTwitter = new Twitter(config);
const textParser = bodyParser.text();
const tweetCount = 5; // change it to optimize paging. max value=200

// Tweet a message
app.post('/tweet', textParser, function (req, res) {
    myTwitter.post('statuses/update',{status: req.body}, function (err, tweet, response) {
        if (err) {
            console.error(err);
            throw err;
        }
        console.log(tweet);
        res.end(JSON.stringify(response));
    });
});

// Get list of tweets
app.get('/list', async (req, res) => {
    console.log('list');
    const userResponse = await myTwitter.get('account/verify_credentials', {skip_status: true});
    const  id = userResponse.id_str;
    let tweetList = await myTwitter.get('statuses/user_timeline', {user_id: id, count: tweetCount});
    const maxId = tweetList[tweetList.length - 1].id_str;
    if (Array.isArray(tweetList) && tweetList.length > 0) {
        tweetList = await getStatus(tweetList, id, maxId);
    }
    console.log(tweetList);
    res.end(JSON.stringify(tweetList));
});

async function getStatus(allTweets, id, maxId) {
    try {
        const list = await myTwitter.get('statuses/user_timeline', {
            user_id: id,
            count: tweetCount,
            max_id: maxId
        });
        if (Array.isArray(list) && list.length > 0) {
            const newMaxId = parseInt(list[list.length - 1].id_str).toString();
            list.pop();
            // tweetList = [...tweetList, ...list];
            const tweetsList = allTweets.concat(list);
            return await getStatus(tweetsList, id, newMaxId);
            // return tweetList.concat(await loop());
        }
        else {
            console.log('end', allTweets)
            return allTweets;
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// Init server
app.listen(config.port, function () {
    console.log("server listening at http://%s:%s", config.host, config.port);
});
*/