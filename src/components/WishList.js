import React, { useState } from "react";
import JobCard from "./JobCard";
import DelJobModal from "./DelJobModal";

const WishList = (props) => {
  const [delModalShow, setDelModalShow] = useState(false),
    [job, setJob] = useState();

  const toggleModal = () => setDelModalShow(!delModalShow);
  const handleDelClick = (jobToDel) => {
    toggleModal();
    setJob(jobToDel);
  };

  return (
    <div className="wishlist">
      <DelJobModal
        job={job}
        modalShow={delModalShow}
        toggleModal={toggleModal}
        deleteJob={props.deleteJob}
      />
      {props.jobs.map((job) => {
        return (
          <JobCard
            key={job.timestamp}
            job={job}
            handleDelClick={handleDelClick}
          />
        );
      })}
    </div>
  );
};

export default WishList;
