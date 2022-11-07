import styled from "styled-components";
import { useState } from "react";
import NavBar from "../../components/Nav";
import Button from "../../components/Button";


const Paragraph = styled.text`
font-family: 'Bradley Hand';
font-size: 23px;
color: red;
margin: 15px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
`;

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

const AddMemberForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

   

    return (
      <div>
      <NavBar/>
      <Paragraph>
      <h1>Join The Party!!!</h1>
    
      </Paragraph>
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

      <Button variable="contained">Add ME</Button>
    </StyledForm>


    </div>
  );
};

export default AddMemberForm;