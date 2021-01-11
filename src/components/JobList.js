import React from "react";
// Components
import Job from "./Job";

function JobList({ jobs, filters, setFilters, setJobs }) {
  return (
    <main>
      {jobs.map((eachJob) => (
        <Job
          key={eachJob.id}
          eachJob={eachJob}
          jobs={jobs}
          filters={filters}
          setFilters={setFilters}
          setJobs={setJobs}
        />
      ))}
    </main>
  );
}

export default JobList;
