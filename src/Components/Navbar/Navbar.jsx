import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpen(!isOpen);
    };

    const list = () => (
        <Box
            sx={{ width: 250, borderRight: '1px solid lightgray' }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <span className='list-title'>
                MAIN
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </span>
            <Divider />

            <span className='list-title'>
                LISTS
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Users'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Products'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CreditCardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Orders'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalShippingIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Delivery'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </span>
            <Divider />

            <span className='list-title'>
                USEFUL
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Stats'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <NotificationsNoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Notifications'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </span>
            <Divider />

            <span className='list-title'>
                SERVICE
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MonitorHeartIcon />
                            </ListItemIcon>
                            <ListItemText primary={'System Health'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PsychologyIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Logs'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Settings'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </span>
            <Divider />

            <span className='list-title'>
                USER
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Profile'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Logout'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </span>
            <Divider />

        </Box>
    );

    return (
        <Box className='navbar-container' sx={{ flexGrow: 1 }}>
            <AppBar className='navbar' position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>

                    <div className="items">
                        <div className="item">
                            <LanguageOutlinedIcon className="icon" />
                            English
                        </div>
                        <div className="item">
                            <DarkModeOutlinedIcon className="icon" />
                        </div>
                        <div className="item">
                            <FullscreenExitOutlinedIcon className="icon" />
                        </div>
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className="icon" />
                            <div className="counter">1</div>
                        </div>
                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon className="icon" />
                            <div className="counter">2</div>
                        </div>
                        <div className="item">
                            <FormatListBulletedOutlinedIcon className="icon" />
                        </div>
                        <div className="avatar">
                            <Avatar className='icon' alt='some name' src='./2.jpg' />
                        </div>
                    </div>

                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Avatar alt='some name' src='./2.jpg' />
                    </Button>

                    <div className="mobile-menu">
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <div className="item">
                                    <LanguageOutlinedIcon className="icon" />
                                    English
                                </div>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <div className="item">
                                    <DarkModeOutlinedIcon className="icon" />
                                </div></MenuItem>
                            <MenuItem onClick={handleClose}>
                                <div className="item">
                                    <NotificationsNoneOutlinedIcon className="icon" />
                                    <div className="counter">1</div>
                                </div></MenuItem>
                            <MenuItem onClick={handleClose}>
                                <div className="item">
                                    <ChatBubbleOutlineOutlinedIcon className="icon" />
                                    <div className="counter">2</div>
                                </div></MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>

            <Drawer
                anchor='left'
                open={isOpen}
                onClose={toggleDrawer()}
            >
                {
                    list()
                }
            </Drawer>
        </Box>
    )
}

export default Navbar