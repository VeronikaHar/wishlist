import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddJobModal = (props) => {
  const [company, setCompany] = useState(""),
    [title, setTitle] = useState("");

  // create a variable for random card background color
  const backgroundColor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 90%)";

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
          <Button variant="light" onClick={(e) => {
            if(company===null||title===null||company===""||title==="") {
              alert("Please fill out all the fields.")
            } else{
            props.addJob(Date.now(), company, title, backgroundColor);
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
