import { useState } from "react";

function FavColor() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        id="t1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br></br>
      My Fav Color is {text}
    </div>
  );
}
export default FavColor;
