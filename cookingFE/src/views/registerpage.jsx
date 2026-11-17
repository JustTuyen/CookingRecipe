import * as React from 'react';
//
import SideBanner from '../assets/sidebanner.png'
//
import './css/login.css'
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
//
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import KebabDiningOutlinedIcon from '@mui/icons-material/KebabDiningOutlined';
import EggAltIcon from '@mui/icons-material/EggAlt';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';

//
import { Stack, Typography,TextField, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

//
function Register(){
    return(
        <>
        <Navbar/>
            <div className="min-h-screen w-full flex justify-center bg-[#F3F4F4]">
                <div className="w-full md:w-3/5 flex flex-col gap-2 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="side-banner bg-[#FF8D28] justify-center rounded-lg p-2 hidden md:block">
                            <img src={SideBanner} alt='side banner'/>
                        </div>

                        <div className="col-span-2 side-banner rounded-lg p-4 flex justify-center bg-white">
                            <Box sx={{width:'80%'}}>
                                <Typography variant='h4' sx={{textAlign:'center', py:2, fontWeight:'bold'}}>Register</Typography>
                                <Divider variant='middle'>
                                    <Stack spacing={1} direction={'row'}>
                                        <SetMealOutlinedIcon color='warning'/>
                                        <EggAltIcon color='warning'/>
                                        <KebabDiningOutlinedIcon color='warning'/>
                                    </Stack>
                                </Divider>
                                {/* form */}
                                <Stack spacing={2} direction={'column'} sx={{p:2}}>
                                    <TextField size='large' label="email" variant="outlined"/>
                                    <TextField size='large' label="password"
                                    type="password" variant="outlined" />
                                    <Button variant="contained" color='warning' sx={{p:2}}>SIGN UP!</Button>
                                    
                                </Stack>
                                <Divider/>
                                <Stack spacing={2} direction={'column'} sx={{alignItems:'center', py:2}}>
                                    <Link href="#" underline="hover" variant="body2" color='warning' sx={{alignItems:'center'}}>
                                        <TurnLeftIcon/>
                                        You don't has an account? Register here!
                                    </Link>
                                    <Button variant='text'>
                                        Login By Google
                                    </Button>
                                    <Button variant='text'>
                                        Login By Twitter
                                    </Button>
                                </Stack>
                            </Box>
                        </div>
                    </div>

                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Register;