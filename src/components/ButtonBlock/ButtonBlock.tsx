import Button from "../Button/Button";
import Favorites from "../Favorites/Favorites";
import { StyledButtonBlock } from "./styled";

const ButtonBlock = () => {
  return (
    <StyledButtonBlock>
      <Button />
      <Favorites />
    </StyledButtonBlock>
  );
};

export default ButtonBlock;
