import React, { useState } from "react";
import AddJobModal from "./AddJobModal";
import WishList from "./WishList";
import { Button, Container } from "react-bootstrap";

function MainView() {
  const [jobs, setJobs] = useState([]),
    [modalShow, setModalShow] = useState(false),
    [jobId, setJobId]= useState(0);

  const closeModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);

  const addJob = (company, title) => {
    //update jobs
    setJobs(jobs.concat({id:jobId, company, title }));
    setJobId(jobId+1);
    closeModal();
  };

  const deleteJob= idToDelete => {
    setJobs([...jobs.filter((_, index) => index !== idToDelete)]);
  };

  return (
    <Container>
      <h3>WISHLIST</h3>
      <p>
        {jobs.length} {jobs.length === 1 ? "JOB" : "JOBS"}
      </p>
      <Button onClick={showModal}>+</Button>
      <AddJobModal
        modalShow={modalShow}
        closeModal={closeModal}
        addJob={addJob}
      />
      <WishList jobs={jobs} deleteJob={deleteJob} />
    </Container>
  );
}

export default MainView;
