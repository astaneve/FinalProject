import styled from "styled-components";
import NavBar from "../../components/Nav";
import Heading from "../../components/Heading";
import DefaultLayout from "../../layouts/DefaultLayout";
import Button from "../../components/Button";
import Table from "../../components/Table/Table";

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Members = () => {
  return (
    <div>
      <NavBar />
      <DefaultLayout>
        <TopBar>
          <Heading>Members List</Heading>
          <Button>Add Member</Button>
        </TopBar>
        <div><Table></Table></div>
      </DefaultLayout>
    </div>
  );
};

export default Members;