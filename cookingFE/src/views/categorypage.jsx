
import * as React from 'react';
//
import Cat from '../assets/cat-img.webp'
import Dish from '../assets/dish01.webp'
//
import Navbar from "../components/navbar";
import DishHeader from "../components/DishHeader";

//
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import SwipeDownOutlinedIcon from '@mui/icons-material/SwipeDownOutlined';
import StarIcon from '@mui/icons-material/Star';

//
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Button, Card, CardMedia, Rating, Stack } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';



function Category(){

    const value = 3.5;
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

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
            <div className="w-full md:w-4/5 flex flex-col gap-2 py-2
            bg-amber-200">
                <section className='pb-8'>  
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
                            '& .MuiBreadcrumbs-li': {
                                fontSize: '18px',
                                fontWeight: 'bold',
                                color: 'black'
                            },
                            '& .MuiBreadcrumbs-li a': {
                                color: 'black',
                                fontWeight: 'bold'
                            }
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
                        borderRadius:'24px'}} size='medium'>
                            Check header!
                        </Button>
                    </Stack>
                </section>

                {/* heaER */}
                <DishHeader/>
                <section>
                    <div className="grid grid-cols-4 sm:grid-cols-2">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                sx={{ height: 200 }}
                                image={Dish}
                                title="dish image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center',py:2 }}>
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>({labels[value]})</Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Category;