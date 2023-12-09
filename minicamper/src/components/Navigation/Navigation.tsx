import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import React, { FC } from 'react';
import {
    useLocation,
    useNavigate
} from 'react-router-dom';
import {
    LINKS,
} from '../../constants/routes';
import { InstagramIcon } from '../../icons/Instagram';
import { LogoIcon } from '../../icons/Logo';
import { MenuIcon } from '../../icons/Menu';
import { ViberIcon } from '../../icons/Viber';
import { useApplicationContext } from '../../store/applicationContext';
import { scrollToById } from '../../utils/scroll';
import styles from './Navigation.module.sass';

const drawerWidth = 240;

interface INavigation {
}

const Navigation: FC<INavigation> = () => {
    const navLinks = LINKS;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {pathname} = location;
    const { contacts: { phone, phoneRaw } } = useApplicationContext();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const PhoneElement = <a className={styles.Number} href={`tel:+${phoneRaw}`}>{phone}</ a>;

    const handleNavItemClick = (route: string) => {
        if (pathname !== '/') {
            return () => {
                navigate(`/`, {state: {hash: route}});
            };
        }

        return scrollToById(route);
    };

    const mobileMenu = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', justifyContent: 'space-between'}}
             className={styles.SideBar}>
            <div className={styles.LogoSide}><LogoIcon/></div>
            <Divider/>
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} onClick={handleNavItemClick(item.url)}>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <div className={styles.SideBarContacts}>
                {PhoneElement}
                <div className={styles.Messengers}>
                    <a target="_blank" rel="noreferrer"
                       href="https://instagram.com/camper_arenda_by?utm_source=qr&igshid=YzU1NGVlODEzOA=="><InstagramIcon/></a>
                    <a href={`viber://chat?number=%2B${phoneRaw}`}><ViberIcon/></a>
                </div>
            </div>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <div className={styles.Navigation}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar component="nav">
                    <div id="header" className={styles.NavWrapper}>
                        <Toolbar sx={{
                            padding: '0',
                            paddingLeft: {xs: '0'},
                            paddingRight: {xs: '0'},
                            justifyContent: {xs: 'center'}
                        }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{mr: 2, display: {lg: 'none'}, marginLeft: 0, marginRight: 0}}
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Box sx={{
                                display: {xs: 'none', lg: 'flex'},
                                'justifyContent': 'space-between',
                                'width': '100%'
                            }}>
                                <div className={styles.Clickable} onClick={handleNavItemClick('header')}><LogoIcon/>
                                </div>
                                <div className={styles.NavLink}>
                                    {navLinks.map((link) => (
                                        <Button key={link.title}
                                                sx={{color: '#000', textTransform: 'none', fontSize: '16px'}}
                                                onClick={handleNavItemClick(link.url)}>
                                            {link.title}
                                        </Button>
                                    ))}
                                </div>
                                <div className={styles.Phone}>
                                    {PhoneElement}
                                </div>
                            </Box>
                        </Toolbar>
                    </div>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: {xs: 'block', lg: 'none'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                        }}
                    >
                        {mobileMenu}
                    </Drawer>
                </nav>
            </Box>
        </div>
    );
};

export default Navigation;
