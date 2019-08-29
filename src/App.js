import React, { useState } from "react";
import styled from "styled-components";
import Task_Modal from "./Task_Modal";
const Container = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  z-index: -1;
`;

const Title = styled.div`
  font-family: consolas;
  font-weight: bold;
  font-size: 64px;
  color: #00b5ad;
`;

const Add_Task = styled.button`
  width: 70%;
  height: 45px;
  font-family: consolas;
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
  background-color: #00b5ad;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 6px;
  :active {
    box-shadow: none;
  }
`;

const App = () => {
  const [isModalActice, setIsModalActive] = useState(false);
  const [task, setTask] = useState({
    taskName: "",
    description: "",
    timestamp: new Date().getTime()
  });
  const [tasks, setTasks] = useState([]);
  function handleIsModalActiveChange() {
    setIsModalActive(prevState => !prevState);
  }
  function handleTaskFormChange(e) {
    const { name, value } = e.target;
    const newTask = { ...task };
    newTask[name] = value;
    setTask(prevState => (prevState = newTask));
  }
  function addTask() {
    const newTask = { ...task };
    newTask.timestamp = new Date().getTime();
    setTask(prevState => (prevState = newTask));
    const newTasks = [...tasks];
    newTasks.push(task);
    setTasks(prevState => (prevState = newTasks));
  }
  return (
    <>
      <Container>
        <Title>TO DO LIST</Title>
        <Add_Task onClick={handleIsModalActiveChange}>New Task</Add_Task>
      </Container>
      {isModalActice && (
        <Task_Modal
          handleTaskFormChange={handleTaskFormChange}
          handleIsModalActiveChange={handleIsModalActiveChange}
          addTask={addTask}
        />
      )}
    </>
  );
};

export default App;
