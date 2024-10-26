import Tweet from "./Tweet";
import "../Css/TweetList.css";
// import { memo } from "react";

const TweetList = ({ tweets, onEditTweet }) => {
  // const MemoisedTweet = memo(Tweet);
  return (
    <ul className="tweetList_wrapper">
      {tweets?.map((tweet) => {
        return (
          <li key={tweet?.id} className="tweet_wrapper">
            <Tweet
              tweetContent={tweet?.content}
              likedCount={tweet?.likedCounts}
              createdAt={tweet?.createdAt?.toString()}
              onEdit={onEditTweet}
              tweetId={tweet?.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TweetList;
