import React from "react";
import { Container, Row } from "react-bootstrap";
import JobCard from "./JobCard";

const WishList = (props) => {
  return (
    <Container>
      <Row>
        {props.jobs.map((job) => {
          return <JobCard key={job.id} job={job} deleteJob={props.deleteJob} />;
        })}
      </Row>
    </Container>
  );
};

export default WishList;
