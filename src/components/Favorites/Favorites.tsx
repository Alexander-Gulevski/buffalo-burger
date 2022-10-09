import { StyledFavorites } from "./styled";
import { Colors } from "../../ui/colors";
import { useState } from "react";

const Favorites = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <StyledFavorites onClick={handleClick} handleClick={isClick}>
      <svg
        width="27"
        height="25"
        viewBox="0 0 27 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1997 23.6905L23.5754 12.9997C25.8788 10.36 26.2145 6.04408 24.0384 3.28559C23.4926 2.59043 22.8283 2.02946 22.086 1.63694C21.3437 1.24442 20.5391 1.02859 19.7211 1.00265C18.9032 0.976713 18.0893 1.1412 17.329 1.48607C16.5687 1.83093 15.8781 2.34893 15.2993 3.00842L13.5399 5.02779L12.0236 3.28559C9.7086 0.659083 5.9236 0.276326 3.50443 2.75765C2.89479 3.37994 2.40282 4.13743 2.05859 4.98384C1.71435 5.83025 1.52508 6.74781 1.50233 7.68044C1.47958 8.61308 1.62383 9.54121 1.92627 10.4081C2.22872 11.2751 2.683 12.0626 3.26136 12.7225L12.8801 23.6905C13.0557 23.8888 13.2928 24 13.5399 24C13.787 24 14.0241 23.8888 14.1997 23.6905Z"
          fill={Colors.WHITE}
          stroke={Colors.WHITE}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </StyledFavorites>
  );
};

export default Favorites;
