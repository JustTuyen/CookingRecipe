import * as React from 'react';
import icon from '../assets/icon.png'

//
import './css/navbar.css'
//icon
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


//materials
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Popper from '@mui/material/Popper';


//
function Navbar(){
   

    //subcategory drawer
    const [openSubDrawer, setOpenSubDrawer] = React.useState(false);
    const handleSubDrawer = () => {
        setOpenSubDrawer(!openSubDrawer);
    };

    // drawer
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: 500, p:{xs:2} }} role="presentation" onClose={() => toggleDrawer(false)}>
            <Stack spacing={2}>
                <Box sx={{padding:'2px'}}>
                    <Stack spacing={2} 
                    direction={'row'} 
                    sx={{justifyContent:'start', alignItems:'center'}}>
                        <IconButton aria-label="closed" size="large"
                        onClick={toggleDrawer(false)}>
                            <CloseOutlinedIcon fontSize="inherit" 
                            sx={{color:'#D4621A'}}/>
                        </IconButton>
                        <img src={icon} alt='web-logo' id='drawer-logo'/>
                    </Stack>
                </Box>
                <Box >
                    <Stack direction="row" spacing={0}>
                        <input
                            type="text"
                            placeholder="search for dish"
                            className="bg-white p-2 pl-4 w-full 
                            rounded-l-full border-2 border-r-0 border-[#D4621A] outline-none"
                        />
                        <IconButton
                            aria-label="search"
                            sx={{
                            backgroundColor: '#D4621A',
                            color: '#fff',
                            borderRadius: '0 9999px 9999px 0',
                            px: 2,
                            '&:hover': { backgroundColor: '#b85316' },
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Stack>
                </Box>
                <Divider variant='middle'/>
                <List>
                    <ListItemButton onClick={handleSubDrawer}>
                        <ListItemText primary="subcategory" />
                        {openSubDrawer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton> 
                </List>
                <Collapse in={openSubDrawer} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="subcategory name" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </Stack>
        </Box>
    );

    //handle open subcategory
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <>
        <nav className="bg-[#FEF3E2] p-4">
            <Stack spacing={2}>
                <Stack direction={'row'}
                sx={{justifyContent: 'space-between',alignItems:'center'}}>
                    <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                        <IconButton aria-label="drawer" size="large"
                        sx={{ display: { xs: 'block', lg: 'none' } }}
                        onClick={toggleDrawer(true)}>
                            <MenuOpenOutlinedIcon fontSize="inherit" sx={{color:'#D4621A'}}/>
                        </IconButton>
                        <img src={icon} alt='web icon' id='web-icon'/>
                    </Stack>
                    <Box sx={{width: '30%', display: { xs: 'none', sm:'none', lg:'block' }}}>
                        <Stack direction="row" spacing={0}>
                            <input
                                type="text"
                                placeholder="search for dish"
                                className="bg-white p-2 pl-4 w-full 
                                rounded-l-full border-2 border-r-0 border-[#D4621A] outline-none"
                            />
                            <IconButton
                                aria-label="search"
                                sx={{
                                backgroundColor: '#D4621A',
                                color: '#fff',
                                borderRadius: '0 9999px 9999px 0',
                                px: 2,
                                '&:hover': { backgroundColor: '#b85316' },
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'row'} spacing={2} sx={{alignItems: 'center',}}>
                            <Tooltip title="Check out our news!">
                                <Typography variant="body2" gutterBottom
                                sx={{fontWeight:'bold'}}>
                                    Newsletter
                                </Typography>
                            </Tooltip>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <IconButton aria-label="profile" size='medium'>
                                <AccountCircleOutlinedIcon fontSize="inherit" sx={{color:'#D4621A'}}/>
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>
                <Grid
                    spacing={4}
                    container
                    direction="row"
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                >
                    <Grid
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                    >
                        <Button
                        aria-haspopup="true"
                        aria-expanded={open}
                        sx={{
                            color: '#D4621A',
                            fontWeight: 'bold',
                        }}
                        >
                            Category
                        </Button>

                        <Popper
                        open={open}
                        anchorEl={anchorEl}
                        placement="bottom-start"
                        style={{ zIndex: 1300 }}
                        >
                            <Paper>
                            <MenuList>
                                <MenuItem
                                    onClick={handleClose}
                                    sx={{ color: '#D4621A' }}
                                >
                                    Subcategory
                                </MenuItem>
                            </MenuList>
                            </Paper>
                        </Popper>
                    </Grid>
                </Grid>
            </Stack>
        </nav>
        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        </>
    )
}

export default Navbar;