import { useState, useCallback, memo } from "react";
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
  const MemoisedAddTweet = memo(AddTweet);
  const handleAddTweet = useCallback((tweetValue) => {
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
  }, []);

  const handleEditTweet = useCallback((newTweet) => {
    /**
     * Here map is giving new array so directly update the setTweets with updatedTweetList.
     * no need to destructured in a new array.
     */
    const updatedTweetList = tweets.map((currentTweet) => {
      return currentTweet?.id === newTweet?.id ? newTweet : currentTweet;
    });
    setTweets(updatedTweetList);
  });
  const handleSortTweet = useCallback(() => {
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
  }, []);
  return (
    <>
      <MemoisedAddTweet onAddTweet={handleAddTweet} />
      <button onClick={handleSortTweet}>Sort Tweet By CreatedAt</button>
      <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </>
  );
}

export default Twitter;

/**
 * useCallback hook is used to memoised the callback function.if we passed nothing in
 * dependency array in this willl not changed, which means it will takes the value
 * from cached memory.
 *
 *
 * memo hook is used to stop the unnecessary re-render of child component when
 * parent components rendered.
 *
 * memo hook says that any memoised component dosen't re-render until any props
 * passed to it comes with any changes.so if props of that components doesn't
 * changes then it will not re-renderd. callback function is memoised using
 * useCallback hooks.
 */
