import React from "react";
import removeImg from "../images/icon-remove.svg";

function FilterList({ filters, setFilters }) {
  const handleClick = (e) => {
    let closeBtn, buttonName, newFilterList;
    closeBtn = e.target;
    buttonName = closeBtn.parentNode.parentNode.firstChild.textContent;

    newFilterList = filters.filter((filterItem) => filterItem !== buttonName);

    setFilters(newFilterList);
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
    </div>
  );
}

export default FilterList;
