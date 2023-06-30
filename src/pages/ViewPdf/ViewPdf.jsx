import React from "react";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdfPath from "../ViewPdf/firstsemester/DigitalLogic/DL2018.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ViewPdf = () => {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <Container fluid>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;Download paper
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfPath} className="d-flex justify-content-center">
            <Page pageNumber={1} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button href={pdfPath} target="_blank" style={{ maxWidth: "250px" }}>
            Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};
export default ViewPdf;
