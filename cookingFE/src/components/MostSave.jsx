import * as React from 'react';


import './css/similarDish.css'
import Dish from '../assets/dish01.webp'

//
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

//
import { Box, Stack, Typography,Card } from "@mui/material";
import {  CardMedia, Rating } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
//
import SlickModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = SlickModule.default ?? SlickModule;


function MostSave(){
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

    const sliderRef = React.useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <>
        <Box sx={{bgcolor:'#FEF3E2', p:2}}>
            <Stack direction={'row'} spacing={1} sx={{alignItems:'center', py:2}}>
                <LocalFireDepartmentOutlinedIcon id='heart' fontSize='large' color='error'/>
                <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:'sans-serif'}}>
                   OUR MOST SAVE RECIPES
                </Typography>
            </Stack>
            <div className="slider-container">
                <Stack direction={'row'} spacing={2} sx={{display:'flex', justifyContent:'right'}}>
                    <IconButton sx={{border:'3px solid #D4621A'}} onClick={() => sliderRef.current?.slickPrev()}>
                        <ArrowBackOutlinedIcon color='warning'/>
                    </IconButton>
                    <IconButton sx={{border:'3px solid #D4621A'}}  onClick={() => sliderRef.current?.slickPrev()}>
                        <ArrowForwardOutlinedIcon color='warning'/>
                    </IconButton>
                </Stack>
                <Slider ref={sliderRef} {...settings}>
                    <Card elevation={3} sx={{ maxWidth: 275 }} className=" mx-auto">
                        <CardActionArea>
                            <div className="relative">
                                <div className='absolute inset-0 z-10 flex 
                                justify-end items-start p-2 pointer-events-none'>
                                    <Stack
                                        direction="column"
                                        spacing={1}
                                        sx={{
                                            padding: "2px",
                                            backgroundColor: "white",
                                            borderRadius: "24px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            pointerEvents: "auto",
                                        }}>
                                        <IconButton aria-label="share" size="small">
                                            <ShareIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="like" size="small">
                                            <FavoriteBorderIcon fontSize="inherit" />
                                        </IconButton>
                                    </Stack>
                                </div>
                                <CardMedia
                                    sx={{ height: 175 }}
                                    image={Dish}
                                    title="dish image"
                                />
                            </div>
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>
                                    Blueberry Banana Bread
                                </Typography>
                                <Stack  direction={'row'} sx={{display:'flex', justifyContent:'space-between'}}>
                                    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center'}}>
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            size='small'
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Typography variant='caption' sx={{ ml: 2 }}>({labels[value]})</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center'}}>
                                        <AccessAlarmOutlinedIcon fontSize='small'/>
                                        <Typography variant='caption' sx={{ ml: 2 }}>30 min</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent:'center'}}>
                                    <ArrowRightOutlinedIcon sx={{color:'#D4621A'}}/>
                                    <Typography variant="body2" gutterBottom sx={{fontWeight:'bold', py:2, textDecoration:'underline'}}>
                                        Save by 22 home cooks!
                                    </Typography>
                                    <ArrowLeftOutlinedIcon sx={{color:'#D4621A'}}/>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                   
                    
                </Slider>
            </div>
        </Box>
        </>
    )
}

export default MostSave;