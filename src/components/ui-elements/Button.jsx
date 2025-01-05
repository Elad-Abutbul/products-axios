const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
