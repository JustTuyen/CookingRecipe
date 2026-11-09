
import * as React from 'react';
//
import Navbar from "../components/navbar";
import DishMenu from '../components/DishMenu';
//
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

//
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Stack } from "@mui/material";




function ChildCategory(){

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            ingredients
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="/">
            chicken
        </Link>,
        <Typography  key="3" sx={{ color: 'black', fontSize:'18px',fontWeight: 'bold' }}>
            Fried Chicken
        </Typography>,
    ];
    return(
        <>
        <Navbar/>
        <div className="min-h-screen w-full flex justify-center">
            <div className="w-full md:w-4/5 flex flex-col gap-2">
                <section className='p-8'>  
                    <Stack spacing={2} sx={{alignItems:'center'}}>                        
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
                            Fried Chicken
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
                    
                </section>

                {/* dishes menu */}
                <section id="dishesMenu">
                    <DishMenu />
                </section>
            </div>
        </div>
        </>
    )
}

export default ChildCategory;