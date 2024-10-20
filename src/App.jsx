import { useState } from "react";
import "./App.css";
import TweetList from "./components/TweetList";

const initialDummyTweets = [
  {
    id: 0,
    content: "we have a new twitter called threads",
  },
  {
    id: 1,
    content: "we should we post",
  },
  {
    id: 2,
    content: "what is up with tech community",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TweetList tweets={initialDummyTweets} />
    </>
  );
}

export default App;
