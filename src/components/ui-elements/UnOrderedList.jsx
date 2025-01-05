const UnOrderedList = ({ className, items }) => {
  return (
    <ul className={className || "default-list-class"}>
      {items.map((item, index) => (
        <li key={index} {...(item.extraProps || {})}>
          <strong>{item.label || "Label not provided"} </strong>
          {item.value}
        </li>
      ))}
    </ul>
  );
};

export default UnOrderedList;
