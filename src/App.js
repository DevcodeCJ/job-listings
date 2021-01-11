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

  useEffect(() => {
    checkFilter();
  }, [filters]);

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
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
