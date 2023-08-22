import { FontOptions, SpacingOptions } from './themesCustomModule';

const baseFontFamily = 'Roboto';

export interface FontSizes {
    fontFamilyBase: string;
    landscape: {
        bodyXSmall: string;
        bodySmall: string;
        bodyMedium: string;
        bodyLarge: string;
        sidePanelXXSmall: string;
        sidePanelXSmall: string;
        sidePanelSmall: string;
        sidePanelMedium: string;
        sidePanelLarge: string;
    };
    portrait: {
        bodyXSmall: string;
        bodySmall: string;
        bodyMedium: string;
        bodyLarge: string;
        sidePanelXXSmall: string;
        sidePanelXSmall: string;
        sidePanelSmall: string;
        sidePanelMedium: string;
        sidePanelLarge: string;
    };
}

const defaultFontSizes = {
    bodyXSmall: 'calc(0.5vh + 0.5vw)',
    bodySmall: 'calc(0.75vh + 0.75vw)',
    bodyMedium: 'calc(1vh + 1vw)',
    bodyLarge: 'calc(2vh + 2vw)',
    sidePanelXXSmall: 'calc(0.25vh + 0.25vw)',
    sidePanelXSmall: 'calc(0.75vh + 0.75vw)',
    sidePanelSmall: 'calc(1.25vh + 1.25vw)',
    sidePanelMedium: 'calc(1vh + 1vw)',
    sidePanelLarge: 'calc(1.7vh + 1.7vw)',
};

export const fontSizes: FontSizes = {
    fontFamilyBase: baseFontFamily,
    landscape: defaultFontSizes,
    portrait: defaultFontSizes,
};

export const fontOptions: FontOptions = {
    fontSizes: fontSizes,
    fontWeightLight: '300',
    fontWeightBase: '400',
    fontWeightMedium: '500',
    fontWeightBold: '600',
};

export const fontMono: FontOptions = {
    fontSizes: {
        ...fontSizes,
        fontFamilyBase: 'Chivo Mono',
    },
    fontWeightLight: fontOptions.fontWeightLight,
    fontWeightBase: fontOptions.fontWeightBase,
    fontWeightMedium: fontOptions.fontWeightMedium,
    fontWeightBold: fontOptions.fontWeightBold,
};

export const spacingOptions: SpacingOptions = {
    lineHeightBase: '1.5',
    sidePanelPadding: '1.5vh 1.5vw',
    sidePanelPaddingPortrait: '1vh 1vw',
    sidePanelPaddingSmall: '2vh 2vw',
    sidePanelHeightPortrait: '37%',
    headingsMarginBottom: '1rem',
    paragraphMarginBottom: '1rem',
};
