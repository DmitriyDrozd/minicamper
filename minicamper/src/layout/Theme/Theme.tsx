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
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: '"Exo 2", sans-serif'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background,
                    borderRadius,
                    border: 'none',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    height: '48px',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    paddingLeft: '14px',
                },
                root: {
                    ':before': {
                        left: '14px',
                        right: '14px',
                    },
                    ':after': {
                        left: '14px',
                        right: '14px',
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius,
                    border: 'none',
                    height: '64px',
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
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderRadius,
                    ':first-of-type': {
                        borderRadius
                    },
                    ':last-of-type': {
                        borderRadius
                    },
                    ':before': {
                        content: 'none',
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                content: {
                    margin: '21px 0',
                }
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    textAlign: 'left',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    boxShadow: 'none',
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    justifyContent: 'space-between',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: '#FAF0E6',
                }
            }
        },
    },
});

const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
      {children}
  </ThemeProvider>
);

export default Theme;
