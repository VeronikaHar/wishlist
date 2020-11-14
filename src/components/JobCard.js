import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const JobCard = (props) => {
  const [timer, setTimer] = useState(0);
  let job = props.job;

  useEffect(() => {
    let minutes = Math.ceil((Date.now() - job.timestamp) / 60000);
    if (minutes < 60) {
      setInterval(() => {
        setTimer(minutes + " min ago");
      }, 60000);
    } else {
      const timestamp = new Date(job.timestamp).toLocaleString();
      setTimer(timestamp);
    }

    return () => clearInterval(minutes);
  }, [timer, job]);

  return (
      <Card style={{backgroundColor: job.backgroundColor}}>
        <Card.Body>
          <Button variant="light" onClick={() => props.deleteJob(job)}></Button>
          <Card.Title>
            {job.company}
          </Card.Title>
          <Card.Text>
            {job.title} <br/>
            <span>{timer === 0 ? "added just now" : "added " + timer}</span>
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default JobCard;
