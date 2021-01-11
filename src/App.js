import React, { useState, useEffect } from "react";
// CSS
import "./App.css";
// Components
import JobList from "./components/JobList";
import FilterList from "./components/FilterList";
import { dataJs } from "./dataJs";
import Attribution from "./components/Attribution";

function App() {
  //UseStates
  const [jobs, setJobs] = useState(dataJs);
  const [filters, setFilters] = useState([]);

  // UseEffects
  useEffect(() => {
    checkBackground();
  }, []);

  useEffect(() => {
    checkFilter();
  }, [filters]);

  // Functions
  const checkFilter = () => {
    const jobContainer = document.querySelector("main");
    const filterContainer = document.querySelector(".filter-ctn");
    const filterLength = filters.length;

    if (filterLength === 0) {
      filterContainer.classList.add("filter-ctn-display");
      jobContainer.classList.add("main-display");
      setJobs(dataJs);
    } else {
      filterContainer.classList.remove("filter-ctn-display");
      jobContainer.classList.remove("main-display");
    }
  };

  const checkBackground = () => {
    const header = document.querySelector("header");
    if (window.innerWidth > 1023) {
      header.classList.remove("header-mobile");
      header.classList.add("header-desktop");
    } else {
      header.classList.remove("header-desktop");
      header.classList.add("header-mobile");
    }
  };

  // Events
  window.addEventListener("resize", checkBackground);

  return (
    <div>
      <header></header>
      <FilterList filters={filters} setFilters={setFilters} setJobs={setJobs} />
      <JobList
        jobs={jobs}
        filters={filters}
        setFilters={setFilters}
        setJobs={setJobs}
      />
      <Attribution />
    </div>
  );
}

export default App;
