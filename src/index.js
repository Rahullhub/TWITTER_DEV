const express = require("express");

const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repository");

const Tweet = require("./models/tweet");
const Comment = require("./models/comment");
app.listen(3001, async () => {
  console.log(`Server started on port 3001`);
  await connect();

  console.log("mongodb connected");
  //    const tweet= await Tweet.create({
  //        content:'first tweet',
  //        userEmail:'a@b.com'
  //    })
  //    console.log(tweet)
  // const tweet= await Tweet.create({
  //     content:'first comment here'
  // });
  // console.log(tweet);
  // tweet.comments.push({content:'first comment here'});
  // await tweet.save();

  // console.log(tweet);
//  

const tweetRepo= new TweetRepository();
const tweet= await tweetRepo.getWithComments('68527029bde23057e63f6299');
console.log(tweet);
});
