import { useEffect, useState } from "react";
const FunctionalCounter = () => {
  const [counter, setCounter] = useState({ name: "", count: 0 });
  useEffect(() => {
    console.log("document title updating");
    document.title = `clicked : ${counter.count} times`;
  }, [counter.count]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setCounter({ ...counter, name: e.target.value })}
        value={counter.name}
      />
      <button
        onClick={() => setCounter({ ...counter, count: counter.count + 1 })}
      >
        {counter.count}
      </button>
    </div>
  );
};

export default FunctionalCounter;
