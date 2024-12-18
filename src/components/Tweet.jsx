import { useState } from "react";
import "../Css/Tweet.css";
const Tweet = ({ tweetContent, likedCount, createdAt, onEdit, tweetId }) => {
  const [isEditting, setIsEditting] = useState(false);
  const handleEditTweet = () => {
    setIsEditting((prevState) => !prevState);
  };
  const handleTweetContent = (e) => {
    onEdit({
      id: tweetId,
      content: e.target.value,
      likedCounts: likedCount,
      createdAt: new Date(createdAt),
      /** if we use :-
       * 1. createdAt: new Date(), :- then it always gives me updated time in date format.
       *
       *2. createdAt: new Date(createdAt), :- then it always gives me previous dates only.
       */
      // createdAt: new Date(),
    });
  };
  return (
    <div className="tweet-wrapper">
      <div className="tweetContent_wrapper">
        <div className="tweet-content">
          {(isEditting && <input onChange={handleTweetContent} />) ||
            tweetContent}
        </div>
        <div className="editBtn">
          <button onClick={handleEditTweet}>
            {(isEditting && "Save") || "Edit"}
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
