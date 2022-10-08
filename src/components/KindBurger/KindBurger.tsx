import { StyledKindBurger } from "./styled";
import fish from '../../assets/icon/fish.svg';

const KindBurger = () => {
  return (
    <StyledKindBurger>
      <img src={fish} alt="fish burger"/>
    </StyledKindBurger>
  );
};

export default KindBurger;