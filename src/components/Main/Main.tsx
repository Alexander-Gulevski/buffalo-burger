import Burger from "../Burger/Burger";
import Description from "../Description/Description";
import { StyledMain } from "./styled";

const Main = () => {
    return (
        <StyledMain>
            <Burger/>
            <Description/>
        </StyledMain>
    );
  };
  
export default Main;