import { useEffect, useState } from "react";
import Button from "./Button";

const BorderCountries = ({ borders = [] }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const borderCode = borders.join(",");

  useEffect(() => {
    const fetchData = () => {
      if (borderCode) {
        fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCode}`)
          .then((response) => response.json())
          .then((data) => {
            const result = data.map((country) => {
              return { code: country.cca3, name: country.name.common };
            });
            setBorderCountries(result);
          });
      }
    };
    fetchData();
  }, [borderCode]);

  console.log(borderCountries);
  return (
    <div className="country-detail__border-countries">
      <p>Border Countries: </p>
      <div className="button-group">
        {borderCountries.length !== 0 ? (
          borderCountries.map((item) => (
            <Button key={item.code} link={`/country/${item.code}`}>
              <span>{item.name}</span>
            </Button>
          ))
        ) : (
          <span>N/A</span>
        )}
      </div>
    </div>
  );
};

export default BorderCountries;
