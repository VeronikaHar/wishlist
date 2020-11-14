import React from "react";
import { Button, Modal } from "react-bootstrap";

const DelJobModal = (props) => {
  return (
    <>
      <Modal show={props.modalShow} onHide={props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete job</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this job?</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              props.deleteJob(props.job);
              props.toggleModal();
            }}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            onClick={(e) => {
              props.toggleModal();
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DelJobModal;