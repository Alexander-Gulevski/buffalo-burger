import Basket from "../Basket/Basket";
import Search from "../Search/Search";
import { StyledWidgets } from "./styled";

const Widgets = () => {
    return <StyledWidgets>
        <Search/>
        <Basket/>
    </StyledWidgets>;
    };
export default Widgets;