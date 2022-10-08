import styled from "styled-components";
import { typography } from "../../ui/typography";
import { Colors } from '../../ui/colors';

export const StyledButton = styled.div`
    max-width: 508px;
    width: 100%;
    padding: 15px 0;

    background-color: ${Colors.BUTTON};
    ${typography.button};
    text-align: center;
`;