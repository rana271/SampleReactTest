import React, { useEffect, useRef } from "react";

const SampleEffect = () => {
  const ref = useRef<HTMLInputElement>(null);
  //after Render
  useEffect(() => {
    //side effect or manipulate the dom
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "my sample Application";
  });
  return (
    <div>
      <input ref={ref} type="text" className="forms controls" />
    </div>
  );
};

export default SampleEffect;
