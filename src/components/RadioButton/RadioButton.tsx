import Text from "../Text/Text";
import { StyledRadioButton } from "./styled";

const RadioButton = () => {

  return (
    <StyledRadioButton><input
        type="checkbox"
        id='1'
      />
     <label htmlFor="1"><Text/></label>
    </StyledRadioButton>
    
  );
}

export default RadioButton;
