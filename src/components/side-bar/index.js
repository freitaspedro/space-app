import { styled } from "styled-components";
import Item from "./item";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const SideBar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <Item
            icon="/icons/home.png"
            disabledIcon="/icons/home-disabled.png"
            enabled={true}
          >
            Início
          </Item>
          <Item
            icon="/icons/most-viewed.png"
            disabledIcon="/icons/most-viewed-disabled.png"
          >
            Mais vistas
          </Item>
          <Item
            icon="/icons/most-liked.png"
            disabledIcon="/icons/most-liked-disabled.png"
          >
            Mais curtidas
          </Item>
          <Item icon="/icons/new.png" disabledIcon="/icons/new-disabled.png">
            Novas
          </Item>
          <Item
            icon="/icons/surprise-me.png"
            disabledIcon="/icons/surprise-me-disabled.png"
          >
            Surpreenda-me
          </Item>
        </StyledList>
      </nav>
    </aside>
  );
};

export default SideBar;
