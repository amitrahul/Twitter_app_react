import { useState } from "react";
import "../Css/Tweet.css";
const Tweet = ({ tweetContent, likedCount, createdAt }) => {
  const [isEditting, setIsEditting] = useState(false);
  const handleEditTweet = () => {
    setIsEditting((prevState) => !prevState);
  };
  return (
    <div className="tweet-wrapper">
      <div className="tweetContent_wrapper">
        <div className="tweet-content">
          {(isEditting && <input />) || tweetContent}
        </div>
        <div className="editBtn">
          <button onClick={handleEditTweet}>
            {(isEditting && "Edit") || "Save"}
          </button>
        </div>
      </div>
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
