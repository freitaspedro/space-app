import { styled } from "styled-components";

const StyledItem = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$enabled ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$enabled ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const Item = ({ children, icon, disabledIcon, enabled = false }) => {
  return (
    <StyledItem $enabled={enabled}>
      <img src={enabled ? icon : disabledIcon} alt="" />
      {children}
    </StyledItem>
  );
};

export default Item;
