export {};

export interface FontOptions {
    fontSizes: {
        fontFamilyBase: string;
        // TODO: remove landscape vs portrait for size now that we're using calc(vh + vw)
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
    };
    fontWeightLight: string;
    fontWeightBase: string;
    fontWeightMedium: string;
    fontWeightBold: string;
}

export interface SpacingOptions {
    lineHeightBase: string;
    sidePanelPadding: string;
    sidePanelPaddingPortrait: string;
    sidePanelPaddingSmall: string;
    sidePanelHeightPortrait: string;
    // Headings
    headingsMarginBottom: string;

    // Paragraph
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

    // allow configuration using `createMuiTheme`
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
