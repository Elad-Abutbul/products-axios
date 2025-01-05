import { Link } from "react-router-dom";
import Country from "../country-components/Country";
import CountryFlag from "../country-components/CountryFlag";

const Card = (props) => {
  const { country, routing } = props;

  if (!country || !country.name || !country.flags) {
    return <div>Data not available</div>;
  }

  return (
    <Link
      to={`/${routing}/${encodeURIComponent(country.name.common)}`}
      className="country scale-effect"
      data-country-name={country.name.common}
    >
      <CountryFlag
        src={country.flags.svg || country.flags.png}
        alt={`Flag of ${country.name.common}`}
      />
      <Country country={country} />
    </Link>
  );
};

export default Card;
