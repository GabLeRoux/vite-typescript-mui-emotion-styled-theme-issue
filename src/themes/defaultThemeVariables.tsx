import { FontOptions, SpacingOptions } from './themesCustomModule';

const baseFontFamily = 'Roboto';

export interface FontSizes {
    fontFamilyBase: string;
}

export const fontSizes: FontSizes = {
    fontFamilyBase: baseFontFamily,
};

export const fontOptions: FontOptions = {
    fontSizes: fontSizes,
};

export const fontMono: FontOptions = {
    fontSizes: {
        fontFamilyBase: 'Roboto Mono',
    }
};

export const spacingOptions: SpacingOptions = {
    lineHeightBase: '1.5',
    headingsMarginBottom: '1rem',
    paragraphMarginBottom: '1rem',
};
