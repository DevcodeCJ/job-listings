import React from "react";

function FilterButtons({ button, filters, setFilters }) {
  const handleClick = (e) => {
    let val;
    val = e.target.textContent;

    setFilters([...filters, val]);
  };

  return (
    <button onClick={handleClick} className="filter-btn">
      {button}
    </button>
  );
}

export default FilterButtons;
