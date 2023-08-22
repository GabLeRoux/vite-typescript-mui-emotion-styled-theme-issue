import { Theme } from '@mui/material/styles';

import { fontOptions, spacingOptions } from './defaultThemeVariables';
import { lightTheme } from './light.theme';
import { darkTheme } from './dark.theme';
import { FontOptions, SpacingOptions } from './themesCustomModule';

const testThemeProperties = (themeName: string, theme: Theme, fontOpts: FontOptions, spacingOpts: SpacingOptions) => {
    test(`${themeName} theme has the correct font options`, () => {
        expect(theme.fonts).toEqual(fontOpts);
    });

    test(`${themeName} theme has the correct spacing options`, () => {
        expect(theme.spacings).toEqual(spacingOpts);
    });

    test(`${themeName} theme has the correct palette options`, () => {
        expect(theme.palette.mode).toBeTruthy();
        expect(theme.palette.backgrounds).toBeTruthy();
        expect(theme.palette.backgrounds.custom).toBeTruthy();
    });
};

describe('Themes', () => {
    testThemeProperties('Light', lightTheme, fontOptions, spacingOptions);
    testThemeProperties('Dark', darkTheme, fontOptions, spacingOptions);
});
