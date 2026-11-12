
import './css/navbar.css'
import icon from '../assets/icon.png'

//
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import AttributionIcon from '@mui/icons-material/Attribution';
import LogoDevIcon from '@mui/icons-material/LogoDev';
//
import { Typography, Stack, Divider } from '@mui/material';


function Footer(){
    return(
        <>
        <div className="w-full bg-[#FEF3E2]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 w-4/5 justify-self-center">
                    <img src={icon} alt='web icon' id='footer-icon'/>

                    {/* categories */}
                    <Stack direction={'column'} spacing={1} sx={{alignItems:'start'}}> 
                        <Typography variant='h6'gutterBottom sx={{fontWeight:'bold'}}>
                            Categories:
                        </Typography>
                        <Typography variant='body1'gutterBottom>
                            Category #1
                        </Typography>
                        <Typography variant='body1'gutterBottom>
                            Category #1
                        </Typography>
                         <Typography variant='body1'gutterBottom>
                            Category #1
                        </Typography>
                    </Stack>

                    {/* general info */}
                    <Stack direction={'column'} spacing={1} sx={{alignItems:'start'}}> 
                        <Typography variant='h6'gutterBottom sx={{fontWeight:'bold'}}>
                            General Information:
                        </Typography>
                        <Typography variant='body1'gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant='body1'gutterBottom>
                            Privacy Policy
                        </Typography>
                        <Typography variant='body1'gutterBottom>
                            Terms Of Service
                        </Typography>
                    </Stack>

                    {/* contact me */}
                    <Stack direction={'column'} spacing={1} sx={{alignItems:'start'}}> 
                        <Typography variant='h6'gutterBottom sx={{fontWeight:'bold'}}>
                            Contact Us:
                        </Typography>
                        <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                            <PhoneIcon color='#D4621A'/>
                            <Typography variant='body1'gutterBottom>
                                PhoneNumber: 0916926266
                            </Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                            <MailIcon color='#D4621A'/>
                            <Typography variant='body1'gutterBottom>
                                Email: dongtuyen@gmail.com
                            </Typography>
                        </Stack>
                    </Stack>

                <Stack>


                </Stack>
            </div>
            <Divider/>
            <Stack
                direction="row"
                sx={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2
                }}
            >
                <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                    <AttributionIcon color='#D4621A'/>
                    <Typography variant='body1'gutterBottom>
                        2026 OurRecipes
                    </Typography>
                </Stack>

                <Stack direction={'row'} spacing={1} sx={{alignItems:'center', textDecoration:'underline'}}>
                    <LogoDevIcon color='#D4621A'/>
                    <Typography variant='body1'gutterBottom>
                        Dong Thanh Tuyen
                    </Typography>
                </Stack>
            </Stack>
        </div>
        </>
    )
}

export default Footer;