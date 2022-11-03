import styled from "styled-components";

const ContainedButton = styled.button`
  background: #eb5d05;
  border: solid 2px #eb5d05;
  padding: 6px 24px;
  color: #fff;
  border-radius: 4px;
  font-size: 13px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.02rem;
  margin: 5px;
  font-weight: 600;
  &:active {
    transform: scale(0.98);
    &:hover {
      opacity: 0.8;
    }
  }`;

const Outlined = styled(ContainedButton)`
  color: #eb5d05;
  border: solid 2px #eb5d05;
  background: #fff;
  margin: 5px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }`;

const Button = ({ children, type }) => {
  if (type === "outlined") {
    return <Outlined>{children}</Outlined>;
  } else {
    return <ContainedButton>{children}</ContainedButton>;
  }
};

export default Button;