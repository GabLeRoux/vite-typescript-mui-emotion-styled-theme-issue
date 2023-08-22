import React from 'react';
import { ThemeProvider } from '@emotion/react'; // <- Emotion's ThemeProvider
import { useAppStore } from './store';
import { darkTheme } from './themes/dark.theme';
import { lightTheme } from './themes/light.theme';
import Button from './button/Button';

function App() {
    const isDarkTheme = useAppStore((state) => state.isDarkTheme);
    const toggleTheme = useAppStore((state) => state.toggleTheme);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <div style={containerStyle}>
                <Button isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            </div>
        </ThemeProvider>
    );
}

export default App;
