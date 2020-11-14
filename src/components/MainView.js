import React, { useState } from "react";
import AddJobModal from "./AddJobModal";
import WishList from "./WishList";
import { Button, Container } from "react-bootstrap";

function MainView() {
  const [jobs, setJobs] = useState([]),
    [modalShow, setModalShow] = useState(false);

  const closeModal = () => setModalShow(false);
  const showModal = () => setModalShow(true);

  const addJob = (timestamp, company, title, backgroundColor) => {
    // add new job to existing ones
    setJobs([...jobs, { timestamp, company, title, backgroundColor }]);
    closeModal();
  };

  const deleteJob = (job) => {
    let arrId = jobs.indexOf(job);
    jobs.splice(arrId, 1);
    setJobs([...jobs]);
  };

  return (
    <Container>
      <h3>WISHLIST</h3>
      <p>
        {jobs.length} {jobs.length === 1 ? "JOB" : "JOBS"}
      </p>
      <Button className="add-btn" variant="light" onClick={showModal}>
        +
      </Button>
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
