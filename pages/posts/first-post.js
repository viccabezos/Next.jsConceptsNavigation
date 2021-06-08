import Link from "next/link";
import { useEffect, useState } from "react";

export default function FirstPost() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  /*const [message, setMessage] = useState();*/

  const message = () => {
    window.alert("Thanks for agreeing, enjoy your stay here");
  };

  return (
    <>
      <h1>
        If you read this, tell me your favo Simpsons character when you correct
        my exercise :) or let me a little heart if you don't like the
        Simpsons...
      </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <button type="button" onClick={message}>
        <a>OK</a>
      </button>
    </>
  );
}
