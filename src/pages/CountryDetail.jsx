import "./CountryDetail.css";
import { useLoaderData } from "react-router-dom";
import BorderCountries from "../components/BorderCountries";
import Button from "../components/Button";

const CountryDetail = () => {
  const countryInfo = useLoaderData();

  return (
    <>
      <section>
        <Button link="/">
          <ion-icon name="arrow-back-outline" className="icon"></ion-icon>
          <span>Back</span>
        </Button>
      </section>
      <section className="country-detail">
        {countryInfo.length !== 0 ? (
          <>
            <picture className="country-detail__image">
              <img src={countryInfo.flags.png} alt="" loading="lazy" />
            </picture>

            <section className="country-detail__content">
              <h3 className="country-detail__name">
                {countryInfo.name.common}
              </h3>
              <div className="country-detail__info-list">
                <ol className="country-detail__info">
                  <li>
                    <span>Native Name:</span>{" "}
                    {Object.keys(countryInfo.name.nativeName)
                      .map((item) => countryInfo.name.nativeName[item].common)
                      .join(", ")}
                  </li>
                  <li>
                    <span>Population:</span>{" "}
                    {countryInfo.population.toLocaleString()}
                  </li>
                  <li>
                    <span>Region:</span> {countryInfo.region}
                  </li>
                  <li>
                    <span>Sub Region:</span> {countryInfo.subregion}
                  </li>
                  <li>
                    <span>Capital:</span>{" "}
                    {countryInfo["capital"] !== undefined &&
                      countryInfo.capital.join(", ")}
                  </li>
                </ol>
                <ol className="country-detail__info">
                  <li>
                    <span>Top Level Domain:</span> {countryInfo.tld.join(", ")}
                  </li>
                  <li>
                    <span>Currencies:</span>{" "}
                    {countryInfo["currencies"] !== undefined &&
                      Object.keys(countryInfo.currencies)
                        .map((item) => countryInfo.currencies[item].name)
                        .join(", ")}
                  </li>
                  <li>
                    <span>Languages:</span>{" "}
                    {Object.keys(countryInfo.languages)
                      .map((item) => countryInfo.languages[item])
                      .join(", ")}
                  </li>
                </ol>
              </div>
              <BorderCountries borders={countryInfo.borders} />
            </section>
          </>
        ) : (
          <span>Sorry! No data found.</span>
        )}
      </section>
    </>
  );
};

export default CountryDetail;

export async function loader({ params }) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
  );
  const data = await response.json();
  const [first] = data;
  return first;
}
