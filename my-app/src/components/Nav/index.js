import { Link } from "react-router-dom";
import styled from "styled-components";

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
  color: #eb5d05;
  font-size: 26px;
  font-weight: 500;
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }`;

  const StyledLink = styled(Link)`
  color: #eb9605;
  text-decoration: none;
  margin: 0 14px;
  &:hover {
    color: #eb5d05;
  }`;

const NavBar = () => {
  return (
    <Container>
      <Logo>
        <div>Helloveen party</div>
      </Logo>
      <nav>
        <StyledLink to="/">Members</StyledLink>
        <StyledLink to="/medications">Add Members</StyledLink>
      </nav>
    </Container>
  );
};

export default NavBar;