import { useState } from "react";
const WithCounter = (wrappedComponent) => {
  const UpdatedComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <wrappedComponent counter={count} incrementCounter={incrementCount} />
    );
  };
  return UpdatedComponent;
};

export default WithCounter;