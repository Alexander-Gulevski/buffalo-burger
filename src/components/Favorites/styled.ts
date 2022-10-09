import styled from "styled-components";
import { Colors } from "../../ui/colors";
interface IStyles {
  handleClick: boolean;
}

export const StyledFavorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 70px;
  border: 2px solid ${({ handleClick }: IStyles) =>
      handleClick ? Colors.BORDER_ACTIVE : Colors.WHITE};
    transition: 1s linear 0.2s;;
  border-radius: 50%;

  transition: 1s linear 0.2s;
  cursor: pointer;

  &:hover {
    border-color: ${Colors.BORDER_ACTIVE};
    transition: 1s linear 0.2s;
  }

  path {
    fill:${({ handleClick }: IStyles) =>
      handleClick ? Colors.BORDER_ACTIVE : Colors.WHITE};
    transition: 1s linear 0.2s;
  }
  &:hover path {
    fill: ${Colors.BORDER_ACTIVE};
    transition: 1s linear 0.2s;
  }

  svg {
    display: block;
    width: 30px;
    height: 30px;
  }
`;
// ::after {
//     content: "";
//     display: block;
//     position: absolute;
//     height: 200px;
//     width: 200px;
//     border-radius: 50%;
//     background-color: aqua;
//   }
