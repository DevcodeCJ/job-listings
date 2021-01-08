import React from "react";
// Components
import Job from "./Job";

function JobList({ jobs, filters, setFilters }) {
  return (
    <main>
      {jobs.map((eachJob) => (
        <Job
          key={eachJob.id}
          eachJob={eachJob}
          filters={filters}
          setFilters={setFilters}
        />
      ))}
    </main>
  );
}

export default JobList;
