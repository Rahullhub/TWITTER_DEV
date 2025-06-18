const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id).populate({path:'comments'});
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const updatedTweet = await Tweet.findByIdAndUpdate(
        id,
        {
          content: "updated content here",
        },
        { new: true }
      );
      return updatedTweet;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const tweet = await Tweet.findByIdAndDelete(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = TweetRepository;
