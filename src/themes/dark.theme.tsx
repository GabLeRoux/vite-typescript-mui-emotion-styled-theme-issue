import { createTheme } from '@mui/material';

import { fontMono, fontOptions, spacingOptions } from './defaultThemeVariables';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            white: '#fff',
            textColor: '#fff',
            gray: '#c1c8cc',
            main: '#41BFF3'
        },
        backgrounds: {
            main: 'radial-gradient(circle, rgba(22, 79, 123, 1) 0%, rgba(0, 0, 0, 1) 150%) no-repeat center center',
            action: '#121212',
            custom: 'darkgray'
        },
    },
    fonts: fontOptions,
    fontsMono: fontMono,
    spacings: spacingOptions,
});
