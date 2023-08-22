export {};

export interface FontOptions {
    fontSizes: {
        fontFamilyBase: string;
    };
}

export interface SpacingOptions {
    lineHeightBase: string;
    headingsMarginBottom: string;
    paragraphMarginBottom: string;
}

export interface BackgroundOptions {
    main: string;
    action: string;
    custom: string;
}

declare module '@mui/material/styles/createTheme' {
    interface Theme {
        fonts: FontOptions;
        fontsMono: FontOptions;
        spacings: SpacingOptions;
    }

    interface ThemeOptions {
        fonts: FontOptions;
        fontsMono: FontOptions;
        spacings: SpacingOptions;
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        labelColor: string;
        bodyColor: string;
        linkColor: string;
        activeIcon: string;
        inactiveIconBorder: string;
        svgFilter: string;
        inactiveSvgFilter: string;
        backgrounds: BackgroundOptions;
        actionsMenuSvgFilter: string;
        logoFilter: string;
    }

    interface PaletteOptions {
        labelColor?: string;
        bodyColor?: string;
        menuColor?: string;
        linkColor?: string;
        activeIcon?: string;
        inactiveIconBorder?: string;
        svgFilter: string;
        inactiveSvgFilter: string;
        backgrounds?: BackgroundOptions;
        actionsMenuSvgFilter: string;
        logoFilter: string;
    }

    interface PaletteColor {
        white?: string;
        textColor?: string;
        gray?: string;
        gray_100?: string;
        gray_200?: string;
        gray_300?: string;
        gray_400?: string;
        gray_500?: string;
        gray_600?: string;
        gray_700?: string;
        gray_800?: string;
        gray_900?: string;
        black?: string;
        primary?: string;
        safe?: string;
        warning?: string;
        danger?: string;
    }

    interface SimplePaletteColorOptions {
        white?: string;
        textColor?: string;
        gray?: string;
        gray_100?: string;
        gray_200?: string;
        gray_300?: string;
        gray_400?: string;
        gray_500?: string;
        gray_600?: string;
        gray_700?: string;
        gray_800?: string;
        gray_900?: string;
        black?: string;
        primary?: string;
        safe?: string;
        warning?: string;
        danger?: string;
        labelColor?: string;
        fontColor?: string;
        backgrounds?: BackgroundOptions;
    }
}
