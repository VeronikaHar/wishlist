import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddJobModal = (props) => {
  const [company, setCompany] = useState(""),
    [title, setTitle] = useState("");

  return (
    <>
      <Modal show={props.modalShow} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Company name"
            onChange={(e) => setCompany(e.target.value)}
          />
          <FormControl
            placeholder="Job title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => {
            if((company||title)===(null||"")) {
              alert("Please fill out all fields.")
            } else{
            props.addJob(company, title);
            setCompany("");
            setTitle("");
          }}
          }>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddJobModal;
