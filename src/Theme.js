import { createMuiTheme } from "@material-ui/core/styles"
import orange from '@material-ui/core/colors/orange'
import indigo from '@material-ui/core/colors/indigo'
import { fade } from '@material-ui/core/styles/colorManipulator'


const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: orange[800],
            light: '#fc831f'
        },
        secondary: {
            main: indigo[800],
            light: '#2638bb'
        },
        disabled: {
            main: '#d7d7d7',
            light: "#939ac9"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 630,
            md: 768,
            lg: 960,
            xl: 1170
        }
    },
});
export const theme = createMuiTheme({
    breakpoints: defaultTheme.breakpoints,
    // palette: defaultTheme.palette, //лучше не передавать 
    typography: {
        fontFamily: "'Overpass', 'Source Sans Pro', sans-serif",
        letterSpacing: 0
    },
    overrides: {
        MuiGrid: {
            item: {
                padding: '0 15px'
            },
            container: {
                maxWidth: 1170,
                margin: '0 auto'
            }
        },
        MuiInputBase: {
            input: {
                fontFamily: "'Source Sans Pro', sans-serif",
            }
        },
        MuiInputLabel: {
            root: {
                fontFamily: "'Source Sans Pro', sans-serif",
            }
        },
        MuiIconButton: {
            root: {
                fontSize: 0,
                paddingRight: 0,
                paddingTop: 8,
                "&:hover": {
                    backgroundColor: 'none',
                },
                "&:disabled": {
                    color: defaultTheme.palette.disabled.light
                }
            },
            colorSecondary: {
                color: defaultTheme.palette.secondary.main,
                "&:hover": {
                    backgroundColor: 'transparent',
                    color: defaultTheme.palette.secondary.light
                },
            }
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(22, 12, 13, 0.32)',
            }
        },
        MuiDrawer: {
            paper: {
                width: 259
            }
        },
        MuiButton: {
            root: {
                lineHeight: 1,
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
                "&:hover": {
                    backgroundColor: 'none',
                }
            },
            containedPrimary: {
                backgroundColor: defaultTheme.palette.primary.main,
                textTransform: 'capitalize',
                boxShadow: 'none',
                "&:hover": {
                    backgroundColor: defaultTheme.palette.primary.light
                },
                "&:disabled": {
                    color: '#8d8c8c',
                    backgroundColor: defaultTheme.palette.disabled.main
                }
            },
            containedSizeLarge: {
                fontSize: 20,
                padding: '10px 20px',
                width: 290,
                display: 'flex',
                alignItems: 'center',
                marginTop: 37,
                // boxShadow: '0px 7px 21.84px 2.16px rgba(0, 0, 0, 0.2)',
                "&:hover": {
                    boxShadow: 'none',
                },
                [defaultTheme.breakpoints.up("sm")]: {
                    marginTop: 34,
                },
                [defaultTheme.breakpoints.down("sm")]: {
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }
            },
            outlinedPrimary: {
                width: 290,
                borderRadius: 4,
                border: `2px solid ${defaultTheme.palette.primary.main}`,
                color: defaultTheme.palette.primary.main,
                textTransform: 'none',
                "&:hover": {
                    backgroundColor: fade(defaultTheme.palette.primary.light, 0.2),
                    color: defaultTheme.palette.primary.light,
                    border: `2px solid ${defaultTheme.palette.primary.light}`,
                }
            },
            outlinedSizeLarge: {
                padding: '8px 20px',
                fontSize: 20
            },
            textPrimary: {
                color: defaultTheme.palette.primary.main,
                fontSize: 22,
                paddingLeft: 0,
                paddingRight: 0,
                textTransform: 'capitalize',
                "&:hover": {
                    backgroundColor: 'none',
                },
                [defaultTheme.breakpoints.down("sm")]: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                [defaultTheme.breakpoints.up("md")]: {
                    marginTop: 6
                },
                [defaultTheme.breakpoints.up("xl")]: {
                    marginTop: 'auto'
                }
            },
        },
        MuiTypography: {
            h1: {
                fontSize: '30px',
                lineHeight: '34px',
                color: '#fff',
                [defaultTheme.breakpoints.down("xs")]: {
                    fontSize: '30px',
                    lineHeight: '34px',
                    textAlign: 'center',
                },
                [defaultTheme.breakpoints.up("sm")]: {
                    fontSize: '42px',
                    lineHeight: '51px',
                    textAlign: 'center',
                },
                [defaultTheme.breakpoints.up("md")]: {
                    textAlign: 'left',
                },
                [defaultTheme.breakpoints.up("lg")]: {
                    fontSize: '50px',
                    lineHeight: '60px',
                },
            },
            h2: {
                fontSize: '26px',
                lineHeight: '31px',
                paddingBottom: 16,
                [defaultTheme.breakpoints.up("md")]: {
                    fontSize: '42px',
                    lineHeight: '51px',
                    paddingBottom: 29
                }
            },
            h3: {
                fontSize: '22px',
                lineHeight: '26px',
                textAlign: 'center',
                paddingBottom: 12,
                [defaultTheme.breakpoints.up("md")]: {
                    fontSize: '26px',
                    lineHeight: '31px',
                    textAlign: 'left',
                    paddingBottom: 6
                }
            },
            h4: {
                fontSize: '22px',
                lineHeight: '26px'
            },
            h5: {
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: -0.65,
                [defaultTheme.breakpoints.up("md")]: {
                    fontSize: '18px',
                    lineHeight: '21px',
                },
            },
            subtitle1: {
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: 16,
                lineHeight: '22px',
                color: '#fff',
                [defaultTheme.breakpoints.down("xs")]: {
                    textAlign: 'center',

                },
                [defaultTheme.breakpoints.up("sm")]: {
                    fontSize: 18,
                    lineHeight: '24px',

                },
                [defaultTheme.breakpoints.down("sm")]: {
                    textAlign: 'center'
                },
                [defaultTheme.breakpoints.up("lg")]: {
                    fontSize: '20px',
                    lineHeight: '26px',
                },
            },
            body1: {
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: '16px',
                lineHeight: '22px',
                color: '#393939',
                paddingBottom: 8,
                textAlign: 'center',
                [defaultTheme.breakpoints.up("md")]: {
                    textAlign: 'left',
                }
            },
            body2: {
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: '14px',
                lineHeight: '20px',
                color: '#393939'
            },
            caption: {
                color: '#8d8c8c',
                fontSize: 12,
                fontFamily: "'Source Sans Pro', sans-serif",
            }
        },
        MuiToolbar: {
            regular: {
                height: 64,
                maxWidth: 1170,
                width: '100%',
                margin: '0 auto',
                paddingRight: 15,
                paddingLeft: 15,
                display: 'flex',
                justifyContent: 'space-between',
            }
        },
        MuiAvatar: {
            root: {
                fontFamily: "'Roboto', sans-serif"
            }
        },
        MuiFormHelperText: {
            root: {
                fontFamily: "'Source Sans Pro', sans-serif",
            },
            contained: {
                position: 'absolute',
                top: '100%'
            }
        },
        MuiTooltip: {
            popper: {
                color: "#fff",
            }
        },
        MuiTextField: {
            root: {
                color: 'inherit'
            }
        },
        MuiMenuItem: {
            root: {
                minHeight: 48
            }
        }
    }
});