import styled from "styled-components";
import { typography } from "../../ui/typography";
import { Colors } from "../../ui/colors";

export const StyledButton = styled.div`
  position: relative;
  max-width: 508px;
  width: 100%;
  padding: 10px 0;

  border-radius: 9px;
  border-style: double;
  border-width: 3px;

  background-color: ${Colors.BUTTON};
  ${typography.button};
  text-align: center;
  cursor: pointer;
  &::after {
    ${typography.buttonCircle}
    top: 5px;
    left: 5px;
  }
  &::before {
    ${typography.buttonCircle}
    top: 5px;
    right: 5px;
  }

  & div::after {
    ${typography.buttonCircle}
    bottom: 5px;
    right: 5px;
  }
  & div::before {
    ${typography.buttonCircle}
    bottom: 5px;
    left: 5px;
  }
`;
