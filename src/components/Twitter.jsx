import { useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const initialDummyTweets = [
  {
    id: 0,
    content: "we have a new twitter called threads",
    likedCounts: 3,
  },
  {
    id: 1,
    content: "we should we post",
    likedCounts: 13,
  },
  {
    id: 2,
    content: "what is up with tech community",
    likedCounts: 23,
  },
];

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets);

  const handleAddTweet = (tweetValue) => {
    let nextId = tweets?.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;
    setTweets((prevTweets) => [
      ...prevTweets,
      {
        id: nextId,
        content: tweetValue,
        likedCounts: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };
  return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} />
    </>
  );
}

export default Twitter;
