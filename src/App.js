import React, { useState } from "react";
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

  return (
    <div>
      <header>
        <FilterList filters={filters} setFilters={setFilters} />
      </header>
      <JobList jobs={jobs} filters={filters} setFilters={setFilters} />
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
