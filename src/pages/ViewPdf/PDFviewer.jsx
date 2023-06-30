import React from "react";
import NavbarTool from "../../components/navbar/Navbar";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import ViewPdf from "./ViewPdf";

const PDFViewer = () => {
  return (
    <div>
      <NavbarTool />
      <ViewPdf />
    </div>
  );
};
export default PDFViewer;
