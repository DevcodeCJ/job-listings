import React from "react";
// Components
import FilterButton from "./FilterButton";
import JobImage from "./JobImage";

function Job({ eachJob, filters, setFilters, jobs, setJobs }) {
  let buttonsArr;
  buttonsArr = [
    eachJob.role,
    eachJob.level,
    ...eachJob.languages,
    ...eachJob.tools,
  ];

  return (
    <section className="job-card" key={eachJob.id}>
      {eachJob.featured ? <div className="highlight"></div> : ""}
      <div className="card-section">
        <JobImage eachJob={eachJob} />
        <div className="text-ctn">
          <div className="job-desc">
            <h4>{eachJob.company}</h4>
            {eachJob.new ? <span>new!</span> : ""}
            {eachJob.featured ? <span className="featured">featured</span> : ""}
          </div>
          <h3>{eachJob.position}</h3>
          <div className="job-specs">
            <p>{eachJob.postedAt}</p>
            <div className="dot"></div>
            <p>{eachJob.contract}</p>
            <div className="dot"></div>
            <p>{eachJob.location}</p>
          </div>
        </div>
      </div>

      <div className="filter-btn-ctn">
        {buttonsArr.map((button, index) => (
          <FilterButton
            key={index}
            button={button}
            filters={filters}
            setFilters={setFilters}
            eachJob={eachJob}
            jobs={jobs}
            setJobs={setJobs}
          />
        ))}
      </div>
    </section>
  );
}

export default Job;
