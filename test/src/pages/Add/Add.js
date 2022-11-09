import "./Add.css";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Add = () => {
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberAge, setMemberAge] = useState("");

  const handlerAddOrder = (e) => {
    e.preventDefault();
    if (memberName && memberEmail && memberAge  ) {
      pushOrder({ name: memberName, email: memberEmail, age: memberAge });
      setMemberName("");      
      setMemberEmail("");
      setMemberAge("");
    }
  };

  const pushOrder = (order) => {
    console.log(order);
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    };
    fetch("http://localhost:3001/v1/members/", option)
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navigation />
      <h1 className="heading">Join The Party!!!</h1>
      <div className="add-container">
        <form onSubmit={(e) => handlerAddOrder(e)}>
          <div>
            <label>Member Name</label>
            <input
              type="text"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={memberEmail}
              onChange={(e) => setMemberEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              step="0.01"
              value={memberAge}
              onChange={(e) => setMemberAge(e.target.value)}
            />
          </div>
          <Button type={"submit"}>Add member</Button>
        </form>
      </div>
    </div>
  );
};

export default Add;