import React from "react";

function FilterButtons({ button, filters, setFilters, jobs, setJobs }) {
  const handleClick = (e) => {
    let filteredArr;
    let val;
    val = e.target.textContent;

    filteredArr = jobs.filter(
      (job) =>
        job.role === val ||
        job.level === val ||
        (() => {
          for (let i = 0; i < job.languages.length; i++) {
            if (job.languages[i] === val) {
              return job.languages[i];
            }
          }
        })() ||
        (() => {
          for (let i = 0; i < job.tools.length; i++) {
            if (job.tools[i] === val) {
              return job.tools[i];
            }
          }
        })()
    );

    setFilters([...filters, val]);
    setJobs(filteredArr);
  };

  return (
    <button onClick={handleClick} className="filter-btn">
      {button}
    </button>
  );
}

export default FilterButtons;
