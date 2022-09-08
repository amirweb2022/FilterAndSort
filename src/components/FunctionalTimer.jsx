import { useEffect, useState } from "react";
const FuncionalTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log("hi amir");
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(myTimer);
    };
  });
  return <div>this is timer</div>;
};

export default FuncionalTimer;