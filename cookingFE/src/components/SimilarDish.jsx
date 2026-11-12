

import './css/similarDish.css'
import Dish from '../assets/dish01.webp'

//
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
//
import { Box, Stack, Typography,Card } from "@mui/material";
import {  CardMedia, Rating } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';

function SimilarDish(){
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


    return(
        <>
         <Box sx={{bgcolor:'white', p:2}}>
            <Stack direction={'row'} spacing={1} sx={{alignItems:'center', py:2}}>
                <FavoriteBorderIcon id='heart' fontSize='large' color='error'/>
                <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:'sans-serif'}}>
                    YOU WILL ALSO LOVE:
                </Typography>
            </Stack>
            <Box sx={{width:'100%'}}>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <Card elevation={3} sx={{ maxWidth: 325 }} className=" mx-auto">
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
                                        <IconButton aria-label="go to page" size="small">
                                            <ShareIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="like" size="small">
                                            <FavoriteBorderIcon fontSize="inherit" />
                                        </IconButton>
                                    </Stack>
                                </div>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={Dish}
                                    title="dish image"
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="body2" sx={{ color: 'text.secondary' }}>
                                    banana-bread
                                </Typography>
                                <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>
                                    Blueberry Banana Bread
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
            </Box>
        </Box>
        </>
    )
}

export default SimilarDish;