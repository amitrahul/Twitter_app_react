import "./App.css";
import TweetList from "./components/TweetList";

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

function App() {
  return (
    <>
      <TweetList tweets={initialDummyTweets} />
    </>
  );
}

export default App;
