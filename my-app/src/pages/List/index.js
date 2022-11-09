// import styled from "styled-components";
import Navigation from "../../components/Nav";
import Button from "../../components/Button";
import { useState } from "react";



const Add = () => {
  const [memberList, setMemberList] = useState(0);
  const [name, setName] = useState(0);
//   const [email, setName] = useState(0);
//   const [age, setName] = useState(0);

  const handlerAddList = (e) => {
    e.preventDefault();
    if (memberList && name) {
      addList({ list: memberList, name: name });
      setMemberList("");
      setName("");
    }
  };

  const addList = (list) => {
    console.log(list);
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    };
    fetch("https://localhost:3001/v1/members/", option)
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navigation />
      <div className="add-container">
        <form onSubmit={(e) => handlerAddList(e)}>
          <div>
            <label>Member List</label>
            <input
              type="number"
              value={memberList}
              onChange={(e) => setMemberList(e.target.value)}
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              step="0.01"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button type={"submit"}>Add Member</Button>
        </form>
      </div>
    </div>
  );
};

export default Add;