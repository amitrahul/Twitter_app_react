import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (
    <ul>
      {tweets?.map((tweet, id) => {
        return (
          <li key={id}>
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
