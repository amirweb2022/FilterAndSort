import WithCounter from "../Hoc/withCount";

const ClickCounter = ({ counter, incrementCounter }) => {
  return (
    <div>
      <button onClick={incrementCounter}>{counter}</button>
    </div>
  );
};

export default WithCounter(ClickCounter);