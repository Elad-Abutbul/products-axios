const CountryFlag = ({src, alt}) => {
  return (
    <div className="country-flag">
      <img src={src} alt={`${alt} flag`} />
    </div>
  );
};

export default CountryFlag;
