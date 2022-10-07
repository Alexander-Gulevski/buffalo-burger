import { useState } from "react";
import Text from "../Text/Text";
import { StyledRadioButton } from "./styled";

const RadioButton = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <StyledRadioButton onClick={handleClick} handleClick={isClick}>
      <input type="checkbox" id="1" />
      <label htmlFor="1">
        <Text />
      </label>
    </StyledRadioButton>
  );
};

export default RadioButton;
