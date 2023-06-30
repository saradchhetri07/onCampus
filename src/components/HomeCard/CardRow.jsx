import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Spacer } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

import "./Card.css";
import { useState } from "react";
library.add(faBookOpen);
library.add(faChevronRight);

const CardRow = (props) => {
  const navigate = useNavigate();
  function handleClick() {
    // console.log(datak.name);
    navigate("/questions", { state: { semesterNo: props.semesterNo } });
  }

  return (
    <Container md={4}>
      <Col>
        <Card borderWeight="extrabold" className="card">
          <Card.Header>
            <Text b>{props.name} semester</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <FontAwesomeIcon icon="book-open" size="3x" color="green" />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" onClick={handleClick}>
                <FontAwesomeIcon
                  icon="chevron-right"
                  className="beating-icon"
                />
              </Button>

              {/* <Button size="sm" onClick={handleClick}>
            <FontAwesomeIcon icon="chevron-right" className="beating-icon" />
          </Button> */}
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Container>
  );
};

export default CardRow;
