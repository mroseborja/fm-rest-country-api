import "./CountryCardList.css";
import CountryCard from "./CountryCard";

const CountryCardList = ({ data }) => {
  return (
    <section>
      <ul className="card-grid">
        {data.map((country) => (
          <CountryCard key={country.name.common} countryDetails={country} />
        ))}
      </ul>
      {data.length === 0 && (
        <output name="no-data-found">
          <b>No data found.</b>
        </output>
      )}
    </section>
  );
};

export default CountryCardList;
