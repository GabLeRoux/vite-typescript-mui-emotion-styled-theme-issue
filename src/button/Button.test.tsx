import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { lightTheme } from '../themes/light.theme';
import Button from './Button';

describe('<Button />', () => {


    it('should render correctly with dark theme', () => {
        const toggleThemeMock = () => {};

        const x = lightTheme;

        const view = render(
            <ThemeProvider theme={lightTheme}>
                <Button isDarkTheme={true} toggleTheme={toggleThemeMock} />
            </ThemeProvider>
        ).baseElement;

        expect(view).toMatchSnapshot();
    });

    it('should render correctly with light theme', () => {
        const toggleThemeMock = () => {};

        const view = render(
            <ThemeProvider theme={lightTheme}>
                <Button isDarkTheme={false} toggleTheme={toggleThemeMock} />
            </ThemeProvider>
        ).baseElement;

        expect(view).toMatchSnapshot();
    });
});
