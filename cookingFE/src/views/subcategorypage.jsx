
import * as React from 'react';
//
import Cat from '../assets/cat-img.webp'
//
import Navbar from "../components/navbar";
import DishHeader from "../components/DishHeader";
import DishMenu from '../components/DishMenu';
//
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import SwipeDownOutlinedIcon from '@mui/icons-material/SwipeDownOutlined';
//
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Button, Stack } from "@mui/material";




function SubCategory(){

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            ingredients
        </Link>,
        <Typography  key="2" sx={{ color: 'black', fontSize:'18px',fontWeight: 'bold' }}>
            chicken
        </Typography>
    ];
    return(
        <>
        <Navbar/>
        <div className="min-h-screen w-full flex justify-center">
            <div className="w-full md:w-4/5 flex flex-col gap-2">
                <section className='p-8'>  
                    <Stack spacing={2} sx={{alignItems:'center'}}>
                        {/* cat image */}
                        <img src={Cat} 
                        height={300} width={'100%'}
                        alt='category image'/>
                        
                        {/* navigator */}
                        <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="large" />}
                        aria-label="breadcrumb"
                        sx={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                    {/* info */}
                    <Stack spacing={1} sx={{alignItems:'center'}}>
                        <Typography variant="h4" sx={{fontWeight:'bold'}} gutterBottom>
                            CHICKEN
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'center', textWrap:'pretty'}} 
                        gutterBottom>
                            Find recipes for fried chicken, chicken breast, grilled chicken, chicken wings, and more!
                        </Typography>
                    </Stack>

                    <Box sx={{p:2}}>
                        <Stack spacing={1} direction={'row'} sx={{alignItems:'center'}}>
                            <DiningOutlinedIcon/>
                            <Typography variant='body1' sx={{fontWeight:'bold'}}>
                                looks for the dish you want based on categorized type:
                            </Typography>
                        </Stack>
                        <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-2">
                            <Stack spacing={1} direction={'row'} sx={{alignItems:'center'}}>
                                <PlayArrowIcon />
                                <Link underline="hover" color='black' variant='body1'>Fried Chicken</Link>
                            </Stack>
                        </div>
                    </Box>
                    
                    <Stack spacing={2} direction={'row'} sx={{display:'flex', justifyContent:'center'}}>
                        <Button variant="outlined" startIcon={<NewReleasesOutlinedIcon />}
                        sx={{color:'#D4621A',fontWeight:'bold', border:'2px solid #D4621A', 
                        borderRadius:'24px'}} size='medium'>
                            Surprised Me!
                        </Button>
                        <Button variant="outlined" startIcon={<LocalFireDepartmentOutlinedIcon />}
                        sx={{color:'#D4621A',fontWeight:'bold', border:'2px solid #D4621A', 
                        borderRadius:'24px'}} size='medium'>
                            Most Popular
                        </Button>
                        <Button variant="outlined" startIcon={<SwipeDownOutlinedIcon />}
                        sx={{color:'#D4621A',fontWeight:'bold', border:'2px solid #D4621A', 
                        borderRadius:'24px'}} size='medium' 
                        onClick={() => {
                            document.getElementById('dishesMenu')?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }}>
                            Check our dish!
                        </Button>
                    </Stack>
                </section>

                {/* heaER */}
                <DishHeader/>

                {/* dishes menu */}
                <section id="dishesMenu">
                    <DishMenu />
                </section>
            </div>
        </div>
        </>
    )
}

export default SubCategory;