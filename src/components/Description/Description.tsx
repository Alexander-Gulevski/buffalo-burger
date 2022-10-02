import Bread from "../Bread/Bread";
import Compound from "../Compound/Сompound";
import H3 from "../H3/H3";
import Size from "../Size/Size";
import Title from "../Title/Title";
import { StyledDescription } from "./styled";

const Description = () => {
    return (
        <StyledDescription>
            <Title/>
            <Compound/>
            <H3/>
            <Size/>
            <H3/>
            <Bread/>
        </StyledDescription>
    );
  };
  
export default Description;