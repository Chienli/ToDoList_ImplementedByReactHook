import React, { useState } from "react";
import styled from "styled-components";
import TaskModal from "./Components/TaskModal";
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

const AddTask = styled.button`
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
  const [TaskList, setTaskList] = useState([]);
  function handleIsModalActiveChange() {
    setIsModalActive(pre => !pre);
  }
  function addTaskToList(task_object) {
    const newTaskList = [...TaskList];
    newTaskList.push(task_object);
    setTaskList(newTaskList);
  }

  return (
    <>
      <Container>
        <Title>TO DO LIST</Title>
        <AddTask onClick={handleIsModalActiveChange}>New Task</AddTask>
      </Container>
      {isModalActice && (
        <TaskModal
          addTaskToList={addTaskToList}
          handleIsModalActiveChange={handleIsModalActiveChange}
        />
      )}
    </>
  );
};

export default App;
