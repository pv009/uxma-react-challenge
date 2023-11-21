import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
    typography: {
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '0.875rem',
            fontWeight: 500,
        }
    },
    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
    }
});