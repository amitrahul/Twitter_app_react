import { useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const initialDummyTweets = [
  {
    id: 0,
    content: "we have a new twitter called threads",
    likedCounts: 3,
    createdAt: new Date(),
  },
  {
    id: 1,
    content: "we should we post",
    likedCounts: 13,
    createdAt: new Date(),
  },
  {
    id: 2,
    content: "what is up with tech community",
    likedCounts: 23,
    createdAt: new Date(),
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
        createdAt: new Date(),
      },
    ]);
  };

  const handleEditTweet = (newTweet) => {
    /**
     * Here map is giving new array so directly update the setTweets with updatedTweetList.
     * no need to destructured in a new array.
     */
    const updatedTweetList = tweets.map((currentTweet) => {
      return currentTweet?.id === newTweet?.id ? newTweet : currentTweet;
    });
    setTweets(updatedTweetList);
  };
  const handleSortTweet = () => {
    tweets.sort(
      (tweet1, tweet2) =>
        tweet2?.createdAt.getTime() - tweet1?.createdAt.getTime()
    );
    /*
    if we use it then, it will not work beacuse content inside it changed but
    reference of array is still same. so useSate only work if reference is changed.
    */
    // setTweets(tweets);

    // this will works.through this we are creating a new array.
    setTweets([...tweets]);
  };
  return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <button onClick={handleSortTweet}>Sort Tweet By CreatedAt</button>
      <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </>
  );
}

export default Twitter;
