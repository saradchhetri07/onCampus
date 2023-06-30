import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "./card.css";

library.add(faBookOpen);
library.add(faChevronRight);

function handleClick() {
  window.location.href = "http://localhost:3000/questions";
}

const SubjectRow = (props) => {
  return (
    <Card
      borderWeight="extrabold"
      css={{ width: "400px", height: "350px", marginBottom: "20px" }}
      className="card-Container"
    >
      <Card.Header>
        <Text b>{props.name}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        {/* <FontAwesomeIcon icon="book-open" size="3x" color="red" /> */}
        {Object.entries(props.paperList).map(([key, value]) => (
          <ul>
            <li>
              <a href="/pdf">{key}</a>
            </li>
          </ul>
        ))}
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button size="sm" onClick={handleClick}>
            <FontAwesomeIcon icon="chevron-right" className="beating-icon" />
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default SubjectRow;
