import React, { useState, useEffect } from "react";
// CSS
import "./App.css";
// Components
import JobList from "./components/JobList";
import FilterList from "./components/FilterList";
import { dataJs } from "./dataJs";
import Attribution from "./components/Attribution";

function App() {
  const [jobs, setJobs] = useState(dataJs);
  const [filters, setFilters] = useState([]);

  const checkFilter = () => {
    let filterLength;
    const jobContainer = document.querySelector("main");
    const filterContainer = document.querySelector(".filter-ctn");
    const filterWrapper = document.querySelector(".filter-wrapper");
    filterLength = filters.length;

    if (filterLength === 0) {
      filterContainer.classList.add("filter-ctn-display");
      jobContainer.classList.add("main-display");
    } else {
      filterContainer.classList.remove("filter-ctn-display");
      jobContainer.classList.remove("main-display");
      filterWrapper.classList.add("filter-wrapper-display");
    }
  };

  useEffect(() => {
    checkFilter();
  }, [filters]);

  return (
    <div>
      <header></header>
      <FilterList filters={filters} setFilters={setFilters} />
      <JobList jobs={jobs} filters={filters} setFilters={setFilters} />
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
