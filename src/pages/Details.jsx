import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/ui-elements/Navbar";
import BackButton from "../components/ui-elements/BackButton";
import CountryFlag from "../components/country-components/CountryFlag";
import Country from "../components/country-components/Country";
import Loading from "../components/ui-elements/Loading";
import "../assets/css/details.css";
import "../assets/css/common.css";

const Details = () => {
  const { countryName } = useParams();
  const [searchParams] = useSearchParams();
  const countryQuery = searchParams.get("country") || countryName;

  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!countryQuery) {
      setError("Country not specified");
      setLoading(false);
      return;
    }

    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(
            countryQuery
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const data = await response.json();
        setCountryData(data[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryQuery]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  if (!countryData) return <p>No country data available</p>;

  return (
    <>
      <Navbar />
      <BackButton />
      <main className="main">
        <div className="container">
          <section className="country-details">
            <CountryFlag
              src={countryData.flags.svg || countryData.flags.png}
              alt={countryData.name.common}
            />
            <Country country={countryData}></Country>
          </section>
        </div>
      </main>
    </>
  );
};

export default Details;
