import Input from "../ui-elements/Input";

const InputFilter = (props) => {
  return (
    <div className="search-wrapper">
      <i className="fa-regular fa-magnifying-glass search-icon"></i>
      <Input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputFilter;
