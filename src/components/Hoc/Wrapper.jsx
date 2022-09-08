// const wrapper = (props) => {
//   return <div className={props.class}>{props.children}</div>;
// };

const wrapper = (WrappedComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    );
  };
};

export default wrapper;