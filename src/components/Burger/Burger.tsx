import { StyledBurger } from "./styled";
import burger from '../../assets/icon/burger.svg';
import KindBurger from "../KindBurger/KindBurger";

const Burger = () => {
  return (
    <StyledBurger>
      <KindBurger/>
      <img src={burger} alt="burger"/>
    </StyledBurger>
  );
};

export default Burger;
