import styled from "styled-components";
import InputText from "../input-text";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = ({ filter, setFilter }) => {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="" />
      <InputText setFilter={setFilter} />
    </StyledHeader>
  );
};

export default Header;
