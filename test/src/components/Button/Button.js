import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`btn ${props.children}`}
      onClick={props.func}
    >
      {props.children}
    </button>
  );
};

export default Button;