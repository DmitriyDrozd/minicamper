import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider'
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
                    fontFamily: '"Roboto Flex", sans-serif'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    borderRadius,
                    border: '1px solid transparent',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    border: '1px solid transparent',
                    background,
                    borderRadius,
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
                notchedOutline: {
                    border: '1px solid transparent',
                },
                root: {
                    borderRadius,
                    border: '1px solid transparent',
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
                    background: 'transparent',
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
                    padding: '8px 30px 30px',
                    textAlign: 'left',
                    '@media (max-width: 600px)': {
                        padding: '8px 15px 15px',
                    }
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
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    lineHeight: '2rem',
                }
            }
        }
    },
});

const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
      {children}
  </ThemeProvider>
);

export default Theme;
