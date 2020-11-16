import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const JobCard = (props) => {
  const [timer, setTimer] = useState(0);
  let job = props.job;

  useEffect(() => {
    let minutes = Math.ceil((Date.now() - job.timestamp) / 60000);

    // update how long ago job was posted every min of the 1st hour
    if (minutes < 60) {
      setInterval(() => {
        setTimer(minutes + " min ago");
      }, 60000);

      //after 1h, display time and date when it was added
    } else {
      clearInterval(minutes)
      const timestamp = new Date(job.timestamp).toLocaleString();
      setTimer(timestamp);
    }

    return () => clearInterval(minutes);
  }, [timer, job.timestamp]);

  return (
    <Card style={{ backgroundColor: job.backgroundColor }}>
      <Card.Body>
        <Button
          className="delete-btn"
          variant="light"
          style={{ color: job.backgroundColor }}
          onClick={() => props.handleDelClick(job)}
        >
          {/* trashbin svg */}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-trash"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </Button>
        <Card.Title>{job.company}</Card.Title>
        <Card.Text>
          {job.title} <br />
          <span>{timer === 0 ? "added just now" : "added " + timer}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
