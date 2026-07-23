export const Button = ({ label = "Click Me", handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{ label }</button>
    </div>
  );
};

// export default Button
