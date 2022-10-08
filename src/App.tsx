import { ApolloProvider } from '@apollo/client';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { client } from './api/client';
import { Message } from './components';
import {
    LanguageContext,
    NotificationProvider,
    ProviderAuthContext,
    ProviderImagesUser,
} from './context';
import { Routers } from './routers';

const theme = createTheme({
    typography: {
        fontFamily: [
            'SFProDisplay',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Message>
                    <LanguageContext>
                        <ApolloProvider client={client}>
                            <ProviderAuthContext>
                                <NotificationProvider>
                                    <ProviderImagesUser>
                                        <Routers />
                                    </ProviderImagesUser>
                                </NotificationProvider>
                            </ProviderAuthContext>
                        </ApolloProvider>
                    </LanguageContext>
                </Message>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
