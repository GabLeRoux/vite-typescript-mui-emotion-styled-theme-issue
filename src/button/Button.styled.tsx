import styled from '@emotion/styled';
import { Button as MUIButton } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const StyledButton = styled(MUIButton)<{ theme?: Theme }>`
    background-color: ${(props) => props.theme.palette.backgrounds.custom};
    color: ${(props) => props.theme.palette.text.primary};
    padding: 8px 16px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.primary.contrastText};
    }
`;
