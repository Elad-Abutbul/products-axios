import UnOrderedList from "../ui-elements/UnOrderedList";

const DropDownFilter = ({ onClick, isOpen, filterByRegion, region }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className={`dropdown-wrapper ${isOpen ? "open" : ""}`}>
      <div
        className="dropdown-header flex flex-jc-sb flex-ai-c"
        onClick={onClick}
      >
        <span id="region-filter">
          {region === "All" ? "Filter by Region" : region}
        </span>
        <i className="fa-regular fa-chevron-down icon"></i>
      </div>
      <div className="dropdown-body">
        <UnOrderedList
          id="list-by-region"
          items={regions.map((regionItem) => ({
            label: regionItem,
            extraProps: {
              onClick: () => {
                filterByRegion(regionItem);
                onClick();
              },
            },
          }))}
        />
      </div>
    </div>
  );
};

export default DropDownFilter;
