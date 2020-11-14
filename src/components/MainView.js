import React, { useState } from "react";
import AddJobModal from "./AddJobModal";
import WishList from "./WishList";
import { Button, Container } from "react-bootstrap";

function MainView() {
  const [jobs, setJobs] = useState([]),
    [modalShow, setModalShow] = useState(false);

  const closeModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);

  const addJob = (company, title) => {
    //update jobs
    setJobs(jobs.concat({ company, title }));
    closeModal();
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
      <WishList jobs={jobs} />
    </Container>
  );
}

export default MainView;
