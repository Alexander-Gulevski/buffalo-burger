import Basket from "../Basket/Basket";
import NumberPurchases from "../NumberPurchases/NumberPurchases";
import Search from "../Search/Search";
import { StyledWidgets } from "./styled";

const Widgets = () => {
  return (
    <StyledWidgets>
      <Search />
      <Basket />
    </StyledWidgets>
  );
};
export default Widgets;
