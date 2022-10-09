import styled from "styled-components";
import { Colors } from "../../ui/colors";
interface IStyles {
  handleClick: boolean;
}
export const StyledRadioButton = styled.div`
  display: flex;

  padding: 10px 15px;
  border: 2px solid
    ${({ handleClick }: IStyles) =>
      handleClick ? Colors.BORDER_ACTIVE : Colors.BORDER_INACTIVE};
  border-radius: 9px;
  box-shadow: 2px 4px 8px
    ${({ handleClick }: IStyles) =>
      handleClick ? Colors.BORDER_ACTIVE : "none"};
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;

    margin: auto 0;
    margin-right: 15px;

    width: 24px;
    height: 24px;

    border-radius: 50%;
    border: 2px solid
      ${({ handleClick }: IStyles) =>
        handleClick ? Colors.BORDER_ACTIVE : Colors.BORDER_INACTIVE};
        &::before {
      content: "";
      display: 
      ${({ handleClick }: IStyles) =>
        handleClick ? "block" : "none"};
      align-self: center;

      width: 14px;
      height: 14px;
      border-radius: 50%;

      background-color: ${Colors.MAIN_ORANGE};
    }
  }
`;
