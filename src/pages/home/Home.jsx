import React from "react";
import NavbarTool from "../../components/navbar/Navbar";
import HomeCard from "../../components/HomeCard/HomeCard";
import CardRow from "../../components/HomeCard/CardRow";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import "./CardContainer.css";
import { Container, Col, Spacer } from "@nextui-org/react";

const semesterList = [
  {
    id: 1,
    semester: "first",
    semesterNo: 1,
    subject: {
      "Computer Fundamentals and Applications": {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      "Digital Logic": {
        DL2018: "CFA2018",
        DL2019: "CFA2019",
        DL2020: "CFA2020",
      },
      English: {
        English2018: "CFA2018",
        English2019: "CFA2019",
        English2020: "CFA2020",
      },
      Mathematics: {
        Mathematics2018: "CFA2018",
        Mathematics2019: "CFA2019",
        Mathematics2020: "CFA2020",
      },
      "Society and technology": {
        Mathematics2018: "CFA2018",
        Mathematics2019: "CFA2019",
        Mathematics2020: "CFA2020",
      },
    },
  },
  {
    id: 2,
    semester: "second",
    semesterNo: 2,
    subject: {
      "C programming": {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      English: {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      "financial Accounting": {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      Mathematics: {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      "Microprocessor And Computer Architecture": {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
    },
  },
  {
    id: 3,
    semester: "third",
    semesterNo: 3,
    subject: {
      "C programming": {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      English: {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      "financial Accounting": {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      Mathematics: {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
      "Microprocessor And Computer Architecture": {
        CFA2018: "CFA2018",
        CFA2019: "CFA2019",
        CFA2020: "CFA2020",
      },
    },
  },
  {
    id: 4,
    semester: "fourth",
    semesterNo: 4,
    subject: [
      "C programming",
      "English",
      "financial Accounting",
      "Mathematics",
      "Microprocessor And Computer Architecture",
    ],
  },
  {
    id: 5,
    semester: "fifth",
    subject: [
      "C programming",
      "English",
      "financial Accounting",
      "Mathematics",
      "Microprocessor And Computer Architecture",
    ],
  },
  {
    id: 6,
    semester: "sixth",
    subject: [
      "C programming",
      "English",
      "financial Accounting",
      "Mathematics",
      "Microprocessor And Computer Architecture",
    ],
  },
  {
    id: 7,
    semester: "sixth",
    subject: [
      "C programming",
      "English",
      "financial Accounting",
      "Mathematics",
      "Microprocessor And Computer Architecture",
    ],
  },
  {
    id: 8,
    semester: "sixth",
    subject: [
      "C programming",
      "English",
      "financial Accounting",
      "Mathematics",
      "Microprocessor And Computer Architecture",
    ],
  },
];

const Home = () => {
  return (
    <div>
      <NavbarTool />
      <HomeCard />
      <div className="card-container">
        {semesterList.map((card) => (
          <CardRow
            key={card.id}
            name={card.semester}
            semesterNo={card.semesterNo}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
