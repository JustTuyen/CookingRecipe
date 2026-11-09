
import * as React from 'react';
//
import Navbar from "../components/navbar";
import DishMenu from '../components/DishMenu';
//
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from "@mui/material";




function GrandChildCategory(){

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            ingredients
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="/">
            chicken
        </Link>,
        <Link  underline="hover" key="3" color="inherit" href="/">
            Fried Chicken
        </Link>,
        <Typography  key="4" sx={{ color: 'black', fontSize:'18px',fontWeight: 'bold' }}>
            Beef Short Ribs
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
                             Beef Short Ribs
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'center', textWrap:'pretty'}} 
                        gutterBottom>
                            Find recipes for fried chicken, chicken breast, grilled chicken, chicken wings, and more!
                        </Typography>
                    </Stack>
                    
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

export default GrandChildCategory;