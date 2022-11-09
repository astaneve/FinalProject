import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Container = styled.div`
  padding: 20px 40px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }`;

const Logo = styled.div`
  color: red;
  font-family: 'Bradley Hand';
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }`;

  const StyledLink = styled(Link)`
  color: white;
  font-family:'Oxygen';
  text-decoration: none;
  margin: 0 14px;
  &:hover {
    color: #eb5d05;
  }`;

const NavBar = () => {
  return (
    <Container>
      <Logo>
        <p className="Logo">Secret Santa events</p>
      </Logo>
      <nav>
          <Button>
        <StyledLink to="/members">Member List</StyledLink>
        </Button>
        <Button>
        <StyledLink to="/add">Add Member</StyledLink>
        </Button>
      </nav>
    </Container>
  );
};

export default NavBar;