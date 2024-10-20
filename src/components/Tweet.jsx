const Tweet = ({ tweetContent, likedCount }) => {
  return (
    <div>
      <span>{tweetContent}</span>
      <div>Liked Count : {likedCount}</div>
    </div>
  );
};

export default Tweet;
