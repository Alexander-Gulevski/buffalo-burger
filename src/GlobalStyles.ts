import { createGlobalStyle } from 'styled-components';
import { Colors } from './ui/colors';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${Colors.BG_DARK};
        cursor: default;
        max-width: 1600px;
        width: 100%;
        margin: 0 auto;
    }
`;