import Compound from "../Compound/Сompound";
import Title from "../Title/Title";
import { StyledDescription } from "./styled";

const Description = () => {
    return (
        <StyledDescription>
            <Title/>
            <Compound/>
        </StyledDescription>
    );
  };
  
export default Description;