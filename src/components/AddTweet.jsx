import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTweet = ({ onAddTweet }) => {
  const [text, setText] = useState("");
  return (
    <>
      <ToastContainer position="top-center" />
      <input
        placeholder="add new tweet...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text) {
            onAddTweet(text);
            setText("");
          } else {
            toast.warning("Please write tweet content");
          }
        }}
      >
        Tweet !!
      </button>
    </>
  );
};

export default AddTweet;
