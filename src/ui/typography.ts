import { css } from "styled-components";
import { Colors } from "./colors";

const H2 = css`
  font-family: "Aubrey";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 75px;
  color: ${Colors.WHITE};
`;
const H3 = css`
  font-family: "Andika";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: ${Colors.WHITE};
`;

const logoText = css`
  font-family: "Aubrey";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 42px;
  color: ${Colors.WHITE};
`;

const p = css`
  font-family: "Andika";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: ${Colors.WHITE};
`;


const button = css`
  font-family: "Andika";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 42px;
  text-transform: uppercase;
  color: ${Colors.BLACK};
`;

const buttonCircle = css`
  content: "";
        display: block;
        position: absolute;

        width: 4px;
        height: 4px;

        border-radius: 50%;
        background-color: ${Colors.BLACK};
`;
export const typography = {
  H2,
  H3,
  logoText,
  p,
  button,
  buttonCircle,
};
