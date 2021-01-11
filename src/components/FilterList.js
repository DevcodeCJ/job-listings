import React from "react";
import removeImg from "../images/icon-remove.svg";
import { dataJs } from "../dataJs";

function FilterList({ filters, setFilters, setJobs }) {
  const handleClick = (e) => {
    let closeBtn, buttonName, newFilterList;
    closeBtn = e.target;
    buttonName = closeBtn.parentNode.parentNode.firstChild.textContent;

    newFilterList = filters.filter((filterItem) => filterItem !== buttonName);

    setFilters(newFilterList);
  };

  const clearFilters = () => {
    setFilters([]);
    setJobs(dataJs);
  };

  return (
    <div className="filter-ctn">
      <div className="filter-wrapper">
        {filters.map((eachFilter, index) => (
          <span id={index} key={index} className="filter">
            <button className="filter-name">{eachFilter}</button>
            <button className="close-btn" type="button" name="close-btn">
              <img
                onClick={handleClick}
                className="close-icon"
                src={removeImg}
                alt="remove-icon"
              />
            </button>
          </span>
        ))}
      </div>
      <div className="clear-ctn">
        <h4 onClick={clearFilters}>clear</h4>
      </div>
    </div>
  );
}

export default FilterList;
