import { createTheme } from '@mui/material';
import { fontMono, fontOptions, spacingOptions } from './defaultThemeVariables';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            white: '#000',
            textColor: '#000',
            gray: '#3e474b',
            main: '#41BFF3'
        },
        backgrounds: {
            main: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(235, 235, 235, 1) 150%) no-repeat center center',
            action: '#e8e8e8',
            custom: 'pink',
        },
    },
    fonts: fontOptions,
    fontsMono: fontMono,
    spacings: spacingOptions,
});
