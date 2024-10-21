import "../Css/Tweet.css";
const Tweet = ({ tweetContent, likedCount, createdAt }) => {
  return (
    <div className="tweet-wrapper">
      <div className="tweet-content">{tweetContent}</div>
      <div className="created_liked_tweet_Wrapper">
        <div className="tweet-liked"> {likedCount} likes</div>
        <div className="createdTime">
          <b style={{ color: "green" }}>Created At </b>
          {createdAt}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
