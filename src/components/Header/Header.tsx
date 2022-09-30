import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Widgets from "../Widgets/Widget";
import { StyledHeader } from "./styled";

const Header = () => {
    return (
        <StyledHeader>
          <Menu/>
          <Logo/>
          <Widgets/>
        </StyledHeader>
    );
  };
  
export default Header;