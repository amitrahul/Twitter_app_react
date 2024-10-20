import "../Css/Tweet.css";
const Tweet = ({ tweetContent, likedCount }) => {
  return (
    <div className="tweet-wrapper">
      <div className="tweet-content">{tweetContent}</div>
      <div className="tweet-liked"> {likedCount} likes</div>
    </div>
  );
};

export default Tweet;
