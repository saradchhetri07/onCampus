import React from "react";
import NavbarTool from "../../components/navbar/Navbar";
import SubjectRow from "../../components/Subject/SubjectRow";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import { QuestionsList } from "./QuestionList.js";
import "./cardContainer.css";
import { useLocation } from "react-router";

const Questions = () => {
  const location = useLocation();
  const semesterNo = location.state;
  console.log(semesterNo);

  //const updatedQL = QuestionsList.filter((item) => item.semester == semesterNo);
  // const updatedQL = QuestionsList.filter(
  //   (question) => question.semester === semesterNo
  // );
  // console.log(updatedQL);
  const filteredQuestions = QuestionsList.filter(
    (question) => question.semester === semesterNo.semesterNo
  );
  return (
    <div>
      <NavbarTool />
      <div className="card-container">
        {filteredQuestions.map((card) => (
          <SubjectRow
            key={card.subjectId}
            name={card.subjectName}
            paperList={card.questionPapers}
          />
        ))}
        {/* {QuestionsList.map((card) => (
          <SubjectRow
            key={card.subjectId}
            name={card.subjectName}
            paperList={card.questionPapers}
          />
        ))} */}
        {/* {Object.entries(Subject).map(([key, value]) => (
          <SubjectRow
            // key={card.subjectId}
            name={key}
            paperList={value}
          />
        ))} */}
      </div>
    </div>
  );
};
export default Questions;
