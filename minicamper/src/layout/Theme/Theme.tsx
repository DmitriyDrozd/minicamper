import {
    createTheme,
    ThemeProvider
} from '@mui/material';
import React, { FC } from 'react';
interface ThemeProps {
    children: React.ReactElement
}

const background = '#FFFFFF';
const borderRadius = '20px';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    background,
                    borderRadius,
                    border: 'none',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius,
                    border: 'none',
                },
            },
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    gap: '20px',
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    background,
                    borderRadius,
                },
            },
        },
    },
});

const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
      {children}
  </ThemeProvider>
);

export default Theme;
