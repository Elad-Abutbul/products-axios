import UnOrderedList from "../ui-elements/UnOrderedList";

const Country = ({ country }) => {
  const { name, population, region, capital } = country;

  const countryDetails = [
    { label: "Population:", value: population?.toLocaleString() || "N/A" },
    { label: "Region:", value: region || "N/A" },
    { label: "Capital:", value: capital?.join(", ") || "N/A" },
  ];

  return (
    <div className="country-info">
      <h2 className="country-title">{name.common}</h2>
      <UnOrderedList className="country-brief" items={countryDetails} />
    </div>
  );
};

export default Country;
