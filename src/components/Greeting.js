import { useState } from "react";
import Output from "./Ouput";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changedTextHanler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed</Output>}

      <button onClick={changedTextHanler}>Change text</button>
    </div>
  );
};

export default Greeting;
