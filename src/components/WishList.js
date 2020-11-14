import React from "react";
import JobCard from "./JobCard";

const WishList = (props) => {
  return (
    <div className="wishlist">
        {props.jobs.map((job) => {
          return <JobCard key={job.timestamp} job={job} deleteJob={props.deleteJob} />;
        })}
    </div>
  );
};

export default WishList;
