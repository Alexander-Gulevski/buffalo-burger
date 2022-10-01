import LogoImage from "../LogoImage/LogoImage";
import LogoText from "../LogoText/LogoText";
import { StyledLogo } from "./styled";

const Logo = () => {
    return (
        <StyledLogo>
            <LogoText/>
            <LogoImage/>
            <LogoText/>
        </StyledLogo>
    );
  };
  
export default Logo;