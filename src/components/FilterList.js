import React from "react";
import { RiCloseLine } from "react-icons/ri";

function FilterList({ filters, setFilters }) {
  return (
    <div>
      {filters.map((eachFilter, index) => (
        <div key={index} className="filter">
          <div className="filter-name">{eachFilter}</div>
          <button className="close-btn">
            <RiCloseLine />
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterList;
