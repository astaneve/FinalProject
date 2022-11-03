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
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  margin-top: 5px;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

const AddMemberForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    return (
      <div>
      <NavBar/>
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
          value={name}
          onChange={(e) => setAge(e.target.value)}
        />
      </InputContainer>
      <Button variable="contained">Add member</Button>
    </StyledForm>
    </div>
  );
};

export default AddMemberForm;