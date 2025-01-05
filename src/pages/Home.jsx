import { useState, useEffect } from "react";
import "../assets/css/common.css";
import "../assets/css/main.css";
import Navbar from "../components/ui-elements/Navbar";
import DropDownFilter from "../components/filters/DropDownFilter";
import InputFilter from "../components/filters/InputFilter";
import Card from "../components/ui-elements/Card";
import Loading from "../components/ui-elements/Loading";

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setAllCountries(data);
        setCountries(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue)
    );
    setCountries(filteredCountries);
  };

  const showFilterByRegion = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filterByRegion = (region) => {
    setSelectedRegion(region);

    const filteredCountries = allCountries.filter(
      (country) => region === "All" || country.region === region
    );
    setCountries(filteredCountries);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="filters">
        <div className="container">
          <InputFilter onChange={handleSearch} />
          <DropDownFilter
            onClick={showFilterByRegion}
            isOpen={isDropdownOpen}
            filterByRegion={filterByRegion}
            region={selectedRegion}
          />
        </div>
      </section>
      <main className="main">
        <div className="container">
          <section>
            <div className="countries-grid" id="countries-list">
              {countries.map((country, index) => (
                <Card key={index} country={country} routing="details" />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
