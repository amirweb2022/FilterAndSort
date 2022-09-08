import WithCounter from "../Hoc/withCount";

const HoverCounter = ({ counter, incrementCounter }) => {
  return <div onMouseOver={incrementCounter}>{counter}</div>;
};

export default WithCounter(HoverCounter);