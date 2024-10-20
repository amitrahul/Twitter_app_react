import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <ul>
      {tweets?.map((tweet) => {
        return (
          <li>
            <Tweet
              tweetContent={tweet?.content}
              likedCount={tweet?.likedCount}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TweetList;
