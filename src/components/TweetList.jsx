import Tweet from "./Tweet";
import "../Css/TweetList.css";

const TweetList = ({ tweets }) => {
  return (
    <ul className="tweetList_wrapper">
      {tweets?.map((tweet, id) => {
        return (
          <li key={id} className="tweet_wrapper">
            <Tweet
              tweetContent={tweet?.content}
              likedCount={tweet?.likedCounts}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TweetList;
