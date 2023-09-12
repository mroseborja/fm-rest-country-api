import "./MainPage.css";
import { useState } from "react";
import CountryCardList from "../components/CountryCardList";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";

function App() {
  const countriesData = useLoaderData();

  const [searchCountry, setSearchCountry] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const regions = new Set(countriesData.map((x) => x.region));
  const searchedWord = (country) => setSearchCountry(country);
  const selectedRegion = (region) => setFilterRegion(region);

  const searchRegex = new RegExp(searchCountry, "i");
  const countries = countriesData.filter((country) => {
    if (filterRegion) {
      return (
        country.region === filterRegion &&
        country.name.common.match(searchRegex)
      );
    }
    return country.name.common.match(searchRegex);
  });

  return (
    <>
      <section className="search-filter-box">
        <Search onChange={searchedWord} />
        <Filter regions={regions} selectedRegion={selectedRegion} />
      </section>

      <CountryCardList data={countries} />
    </>
  );
}

export default App;

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}
