import "./CountryCard.css";
import { Link } from "react-router-dom";

const CountryCard = ({ countryDetails }) => {
  return (
    <li className="card card-grid-item">
      <picture className="card__img_container">
        <img
          className="card__img"
          src={countryDetails.flags.png}
          alt={countryDetails.name.common}
        />
      </picture>
      <div className="card__text">
        <h3 className="card__title">
          <Link to={`/country/${countryDetails.cca3}`}>
            {countryDetails.name.common}
          </Link>
        </h3>
        <p className="card__detail">
          <span>Population: </span> {countryDetails.population.toLocaleString()}
        </p>
        <p className="card__detail">
          <span>Region: </span> {countryDetails.region}
        </p>
        <p className="card__detail">
          <span>Capital: </span> {countryDetails.capital}
        </p>
      </div>
    </li>
  );
};

export default CountryCard;
