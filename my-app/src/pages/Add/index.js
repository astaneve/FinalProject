import styled from "styled-components";
import { useState } from "react";
import NavBar from "../../components/Nav";
import Button from "../../components/Button";


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const InputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-radius: 5 px;
 border-color: green;
 font-family:'Oxygen';
`;

const StyledInput = styled.input`
  margin-top: 5px;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

const Add = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const [memberList, setMemberList] = useState("");
    

    const handleAddMember = () => {
        if (memberList) {
            setMemberList((prevList) => [...prevList, name, email, age]);
        }
      };

    return (
      <div>
      <NavBar/>
      
      <input value={memberList} onChange={(event) => setMemberList(event.target.value)} />
      <StyledForm onSubmit={(e) => props.addMember(e, name, email, age)}>
        <InputContainer>
          <label>Member Name</label>
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
<label>Member email</label>
<StyledInput
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
</InputContainer>

<InputContainer>
        <label>Member Age</label>
        <StyledInput
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </InputContainer>

      <Button onClick={handleAddMember}>Add ME</Button>
    </StyledForm>

    <ul>
        {memberList.map((memberList, index) => (
          <li key={index} style={{ color: memberList.completed ? "green" : "red" }}>
            {memberList.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;