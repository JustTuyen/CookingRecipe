import * as React from 'react';
//
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import MyDish from '../../components/profiles/MyDish';
import MySave from '../../components/profiles/MySave';
//

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SetMealIcon from '@mui/icons-material/SetMeal';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import StarsIcon from '@mui/icons-material/Stars';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


//
import { Stack, Typography,Box, Button, Link } from "@mui/material";
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
import ListItemAvatar from '@mui/material/ListItemAvatar';
//

//note: there really has to be a better way to layout this, 1000+ code lines aint fun :((((
///////////////////////////////////////////
//profile
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


///////////////////////////////////////////
//tiny extra tabs for fact, no extra function, static
function CausalUser(){
    return(
        <>
        <Box>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tích luỹ chi tiêu tối thiểu 100,000₫."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Ưu đãi đặc quyền trong các dịp sinh nhật, ra mắt sản phẩm mới và những sự kiện khác."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hỗ trợ chăm sóc tận tình trong suốt quá trình mua hàng."/>
                </ListItem>
            </List>
        </Box>
        </>
    )
}

function ChefUser(){
    return(
        <>
        <Box>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tích luỹ chi tiêu tối thiểu 100,000₫."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Ưu đãi đặc quyền trong các dịp sinh nhật, ra mắt sản phẩm mới và những sự kiện khác."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hỗ trợ chăm sóc tận tình trong suốt quá trình mua hàng."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hỗ trợ chăm sóc tận tình trong suốt quá trình mua hàng."/>
                </ListItem>
            </List>
        </Box>
        
        </>
    )
}

function CriticUser(){
    return(
        <>
        <Box>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tích luỹ chi tiêu tối thiểu 100,000₫."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Ưu đãi đặc quyền trong các dịp sinh nhật, ra mắt sản phẩm mới và những sự kiện khác."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hỗ trợ chăm sóc tận tình trong suốt quá trình mua hàng."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hỗ trợ chăm sóc tận tình trong suốt quá trình mua hàng."/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 30, height: 30, bgcolor:'#FEF3E2' }}>
                            <MilitaryTechIcon sx={{color:'#D4621A'}} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hỗ trợ chăm sóc tận tình trong suốt quá trình mua hàng."/>
                </ListItem>
            </List>
        </Box>
        </>
    )
}

function BadgeOverview(){
    const [activeTab, setActiveTab] = React.useState('causalUser');
    const renderSubView = () => {
        switch(activeTab){
            case 'causalUser':
                return <CausalUser/>;
            case 'chefUser':
                return <ChefUser/>;
            case 'criticUser':
                return <CriticUser/>
        }
    };

    return(
        <>
        <section className='p-2'>
            <Stack spacing={'2'} direction={'column'} sx={{textAlign:'start'}}>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>My Badge</Typography>
                <Typography variant='body1'>Quản lý thông tin hồ sơ để bảo mật tài khoản</Typography>
            </Stack>
            <Divider/>
            <Box sx={{border: '2px solid #D4621A', p:2, m:2}}>
                <Stack spacing={1}>
                    <Typography variant='h5' sx={{fontWeight:'bold'}}>You Badge Currently are <span className='text-[#D4621A] underline'>Causal User</span> !</Typography>
                    <Stack direction={'row'} spacing={1}>
                        <ArrowRightOutlinedIcon/>
                        <Typography variant='body2'>Read ur right below for more info!</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <ArrowRightOutlinedIcon/>
                        <Typography variant='body2'>If you want to rank up, read our instruction <Link  href="#" color='warning' underline="hover">here</Link> for info</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Divider variant='middle'/>
            <Box>
                <Stack direction={'row'} spacing={2} sx={{justifyContent:'center', alignItems:'center',p:2}}>
                    <Button variant='text' color='warning' endIcon={<FaceOutlinedIcon/>} onClick={() => setActiveTab('causalUser')}>
                        Causal
                    </Button>
                    <Button variant='text'color='warning' endIcon={<LocalDiningIcon/>} onClick={() => setActiveTab('chefUser')}>
                        Chef
                    </Button>
                    <Button variant='text'color='warning' endIcon={<VerifiedOutlinedIcon/>} onClick={() => setActiveTab('criticUser')}>
                        Critic
                    </Button>
                </Stack>
                <Box>
                    {renderSubView()}
                </Box>
            </Box>
        </section>
        </>
    )
}

///////////////////////////////////////////
//my dish
function DishOverview(){
    return(
        <>
        <section className='p-2'>
            <Stack spacing={'2'} direction={'column'} sx={{textAlign:'start'}}>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>My Dish</Typography>
                <Typography variant='body1'>Quản lý thông tin hồ sơ để bảo mật tài khoản</Typography>
            </Stack>
            <Divider/>
            
            <MySave/>
           
        </section>
        </>
    )
}

///////////////////////////////////////////
//my dish
function SaveOverview(){
    return(
        <>
        <section className='p-2'>
            <Stack spacing={'2'} direction={'column'} sx={{textAlign:'start'}}>
                <Typography variant='h5' sx={{fontWeight:'bold'}}>My Save</Typography>
                <Typography variant='body1'>Quản lý thông tin hồ sơ để bảo mật tài khoản</Typography>
            </Stack>
            <Divider/>
            
            <MyDish/>
           
        </section>
        </>
    )
}


function Profile(){

    const [activeTab, setActiveTab] = React.useState('badgeOverview');
    const renderSubView = () => {
        switch(activeTab){
            case 'profileOverview':
                return <ProfileOverview/>;
            case 'badgeOverview':
                return <BadgeOverview/>;
            case 'dishOverview':
                return <DishOverview/>
            case 'saveOverview':
                return <SaveOverview/>
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
                        <div className="col-span-3 p-2 bg-white rounded-md min-h-[90vh]">
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