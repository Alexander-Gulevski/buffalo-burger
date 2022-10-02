import { StyledBurger } from "./styled";
import burger from '../../assets/icon/burger.svg';

const Burger = () => {
  return (
    <StyledBurger>
      <img src={burger} alt="burger"/>
    </StyledBurger>
  );
};

export default Burger;
