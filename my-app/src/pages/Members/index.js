import styled from "styled-components";
import { useState, useEffect } from "react";
import NavBar from "../../components/Nav";
// import DefaultLayout from "../../layouts/DefaultLayout";
import Button from "../../components/Button";

// import Table from "../../components/Table/Table";

const H1 = styled.text`
font-family: 'Bradley Hand';
font-size: 23px;
color: red;
margin: 15px;
display: flex;
item-align: center;
`;

const List = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  justify-content: center;
`;


const Members = () => {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState(["Member List"]);

    useEffect(() => {
        fetch("http://localhost:3001/members")
          .then((resp) => resp.json())
          .then((response) => {
            setTodos(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    


    const handleAddTodo = () => {
        if (todoText) {
          setTodos((prevTodos) => [...prevTodos, todoText]);
          setTodoText("");
        }
      };

return (
<div>
      <NavBar/>

      <List>
      <H1>Members List</H1>
 
   
      
<input value={todoText} onChange={(event) => setTodoText(event.target.value)} />
      <Button onClick={handleAddTodo}>Add ME</Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ color: todo.completed ? "green" : "red" }}>
            {todo.title}
          </li>
        ))}
      </ul>
      </List>
    </div>
);
};

export default Members;