import "./Filter.css";

const Filter = ({ regions, selectedRegion }) => {
  const handleChangeRegion = (evt) => selectedRegion(evt.target.value);

  return (
    <div className="filter__box custom-select" tabIndex="-1">
      <select onChange={handleChangeRegion}>
        <option value="0" hidden>
          Filter by Region
        </option>
        {[...regions].sort().map((region, idx) => (
          <option key={idx} value={region}>
            {region}
          </option>
        ))}
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default Filter;
