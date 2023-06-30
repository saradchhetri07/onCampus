import { Dropdown } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const DropDownTool = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questions", { state: { semesterNo: 1 } });
  };
  return (
    <Dropdown>
      <Dropdown.Button flat>Question Bank</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new">
          <a href="/questions" onClick={handleClick}>
            1st semester
          </a>
        </Dropdown.Item>
        <Dropdown.Item key="copy">
          <a href="/questions">2nd semester</a>
        </Dropdown.Item>
        <Dropdown.Item key="edit">
          <a href="/questions">3rd semester</a>
        </Dropdown.Item>
        <Dropdown.Item key="delete">
          <a href="/questions">4th semester</a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownTool;
