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
 
//  
// const tweetRepo= new TweetRepository();
// const tweet= await tweetRepo.getAll(0,4);
// console.log(tweet[0].id);// this id is virtual only , id is not present in mongodb , _id is there it is virtual


});
