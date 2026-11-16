import * as React from 'react';
//
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { Paper, Stack, Typography,Box, Button } from "@mui/material";
//
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SetMealIcon from '@mui/icons-material/SetMeal';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CheckIcon from '@mui/icons-material/Check';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import StarsIcon from '@mui/icons-material/Stars';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
//
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//
function ProfileOverview(){
    return(
        <>
        <section className='p-2'>
            <Stack spacing={'2'} direction={'column'} sx={{textAlign:'start'}}>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>Hồ sơ của tôi</Typography>
                <Typography variant='body1'>Quản lý thông tin hồ sơ để bảo mật tài khoản</Typography>
            </Stack>
            <Divider/>
            <Box sx={{ py: 2, width:'85%' }}>
                {/* Username */}
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ m: 1, alignItems:'center' }}
                >
                    <Typography sx={{ fontWeight: 'bold', width: 100, textAlign:'right' }}>
                        UserName:
                    </Typography>

                    <input
                        className="flex-1 min-w-0 p-2 rounded-lg border"
                        type="text"
                        placeholder="Username"
                    />
                </Stack>

                {/* First name and Last name */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ m: 1, alignItems:'center' }}
                    >
                        <Typography sx={{ fontWeight: 'bold', width: 100, textAlign:'right' }}>
                            First Name:
                        </Typography>

                        <input
                            className="flex-1 min-w-0 p-2 rounded-lg border"
                            type="text"
                            placeholder="Username"
                        />
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ m: 1, alignItems:'center' }}
                    >
                        <Typography sx={{ fontWeight: 'bold', width: 100 , textAlign:'right'}}>
                            Last Name:
                        </Typography>

                        <input
                            className="flex-1 min-w-0 p-2 rounded-lg border"
                            type="text"
                            placeholder="Username"
                        />
                    </Stack>

                </div>

                {/* Genders */}
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ m: 1, alignItems:'center' }}
                >
                    <Typography sx={{ fontWeight: 'bold', width: 100, textAlign:'right' }}>
                        Gender:
                    </Typography>

                    <RadioGroup row name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio color='warning'/>} label="Female" />
                        <FormControlLabel value="male" control={<Radio  color='warning'/>} label="Male" />
                        <FormControlLabel value="other" control={<Radio  color='warning'/>} label="Other" />
                    </RadioGroup>
                </Stack>

                {/* Birth Day */}
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ m: 1, alignItems:'center' }}
                >
                    <Typography sx={{ fontWeight: 'bold', width: 100, textAlign:'right' }}>
                        BirthDay:
                    </Typography>

                    <input
                        className="flex-1 min-w-0 p-2 rounded-lg border"
                        type="date"
                        placeholder="Username"
                    />
                </Stack>
            </Box>
            <Stack direction={'row'} spacing={2} sx={{alignItems:'center', justifyContent:'right'}}>
                <Button variant="outlined" sx={{border:'2px #F4AE52 solid', color:'#F4AE52'}}>Update Infor</Button>
                <Button variant="outlined" sx={{border:'2px #D4621A solid',color:'#D4621A'}}>Update Password</Button>
            </Stack>
        </section> 
        </>
    )
}


function BadgeOverview(){
    const [value, setValue] = React.useState('normie');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <>
        <section className='p-2'>
            <Stack spacing={'2'} direction={'column'} sx={{textAlign:'start'}}>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>My Badge</Typography>
                <Typography variant='body1'>Quản lý thông tin hồ sơ để bảo mật tài khoản</Typography>
            </Stack>
            <Divider/>
            <Box>
                
            </Box>
            <Box sx={{ width: '100%' }}>
                <Stack direction={'row'} spacing={2} sx={{justifyContent:'center', alignItems:'center',p:2}}>
                    <Button variant='text' color='warning' endIcon={<FaceOutlinedIcon/>}>
                        Causal
                    </Button>
                    <Button variant='text'color='warning' endIcon={<LocalDiningIcon/>}>
                        Chef
                    </Button>
                    <Button variant='text'color='warning' endIcon={<VerifiedOutlinedIcon/>}>
                        Critic
                    </Button>

                </Stack>
            
            </Box>
        </section>
        </>
    )
}

function Profile(){

    const [activeTab, setActiveTab] = React.useState('profileOverview');
    const renderSubView = () => {
        switch(activeTab){
            case 'profileOverview':
                return <ProfileOverview/>;
            case 'badgeOverview':
                return <BadgeOverview/>;
            // case 'bookmark':
            //     return <BookMarks/>
            // case 'posting':
            //     return <Posting/>
        }
    };

    return(
        <>
        <Navbar/>
            <div className="min-h-screen w-full flex justify-center bg-[#F3F4F4]">
                <div className="w-full md:w-4/5 flex flex-col gap-2">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2 py-2">

                        {/* navigation */}
                        <div className="relative" >
                            <Box sx={{
                                position: "sticky",
                                top: "10px",
                                alignSelf: "start",
                                height: "fit-content",
                            }}>
                                <Stack spacing={1} direction={'row'} 
                                sx={{alignItems:'center',p:2}}
                                >
                                    <Avatar sx={{ bgcolor: '#D4621A'}}>
                                        <AccountCircleOutlinedIcon fontSize="large" sx={{color:'white'}}/>
                                    </Avatar>
                                    <Typography sx={{fontWeight:'bold'}} variant="body1">UserName</Typography>
                                </Stack>
                                <Divider/>
                                <Box>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton onClick={() => setActiveTab('notifyOverview')}>
                                                <ListItemIcon>
                                                    <NotificationsIcon sx={{color:'#D4621A'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Notifications" />
                                            </ListItemButton>
                                        </ListItem>
                                         <ListItem disablePadding>
                                            <ListItemButton onClick={() => setActiveTab('badgeOverview')}>
                                                <ListItemIcon>
                                                    <StarsIcon sx={{color:'#D4621A'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="My Badge" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton onClick={() => setActiveTab('profileOverview')}>
                                                <ListItemIcon>
                                                    <ManageAccountsIcon sx={{color:'#D4621A'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Profile Manager" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton onClick={() => setActiveTab('dishOverview')}>
                                                <ListItemIcon>
                                                    <SetMealIcon sx={{color:'#D4621A'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="My Dish" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton onClick={() => setActiveTab('saveOverview')}>
                                                <ListItemIcon>
                                                    <BookIcon sx={{color:'#D4621A'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="My SaveBook" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                    <Divider variant="middle"/>
                                    <Box sx={{display:'flex',justifyContent:'center',p:1}}>
                                        <Button variant="outlined" color="warning"
                                        sx={{fontWeight:'bold'}} endIcon={<LogoutIcon/>}>
                                            Logout
                                        </Button>
                                    </Box>
                                </Box>    
                            </Box>
                        </div>


                        {/* content */}
                        <div className="col-span-3 p-2 bg-white rounded-md ">
                            {renderSubView()}
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Profile;