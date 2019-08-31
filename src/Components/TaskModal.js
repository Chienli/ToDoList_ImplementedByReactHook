import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.7;
  position: absolute;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 450px;
  height: 250px;
  background-color: #fff;
  border-radius: 5px;
`;
const CardHeader = styled.div`
  width: 450px;
  height: 40px;
  background-color: #00b5ad;
  border-radius: 5px 5px 0 0;
  font-family: consolas;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`;
const CardBody = styled.div`
  width: 450px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  input {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    padding-left: 10px;
    outline: none;
    font-family: "consolas", "microsoft jhenghei";
    ::placeholder {
      font-family: consolas;
    }
    :focus {
      box-shadow: rgba(0, 0, 0, 0.6) 0 0 6px;
    }
  }
`;

const CardFooter = styled.div`
  width: 450px;
  height: 40px;
  border-radius: 0 0 5px 5px;
  font-family: consolas;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
`;

const Button = styled.button`
  width: 225px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  font-family: consolas;
  border-radius: ${props =>
    props.className === "cancel" ? "0 0 0 5px" : "0 0 5px 0"};
  background-color: ${props =>
    props.className === "cancel" ? "red" : "green"};
  :hover {
    background-color: #fff;
    color: ${props => (props.className === "cancel" ? "red" : "green")};
    border-width: ${props =>
      props.className === "cancel" ? "1px 1px 1px 0" : "1px 0 1px 1px"};
    border-style: solid;
    border-color: ${props => (props.className === "cancel" ? "red" : "green")};
  }
`;

const TaskModal = props => {
  const { handleIsModalActiveChange, addTaskToList } = props;
  const [task, setTask] = useState({
    taskName: "",
    description: "",
    timestamp: 0
  });

  function handleTaskChange(e) {
    const { name, value } = e.target;
    const newTask = { ...task };
    newTask.timestamp = new Date().getTime();
    newTask[name] = value;
    setTask(newTask);
  }

  return (
    <Container>
      <CardContainer>
        <CardHeader>New Task</CardHeader>
        <CardBody>
          <input
            onChange={handleTaskChange}
            type="text"
            placeholder="Task Name"
            name="taskName"
          />
          <input
            onChange={handleTaskChange}
            type="text"
            placeholder="Description"
            name="description"
          />
        </CardBody>
        <CardFooter>
          <Button onClick={handleIsModalActiveChange} className="cancel">
            Cancel
          </Button>
          <Button
            onClick={() => {
              addTaskToList(task);
              handleIsModalActiveChange();
            }}
            className="add"
          >
            Add
          </Button>
        </CardFooter>
      </CardContainer>
    </Container>
  );
};

export default TaskModal;
