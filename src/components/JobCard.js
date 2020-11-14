import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const JobCard = (props) => {
  let job = props.job;

  return (
    <div className="col-12">
      <Card>
        <Card.Body>
          <Button onClick={() => props.deleteJob(job.id)}></Button>
          <Card.Title>
            <h5>{job.company}</h5>
          </Card.Title>
          <Card.Text>{job.title}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobCard;