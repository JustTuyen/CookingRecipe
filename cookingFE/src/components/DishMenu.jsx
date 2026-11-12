import * as React from 'react';
//
import Dish from '../assets/dish01.webp'
//
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
//
import Typography from '@mui/material/Typography';
import { Box, Card, CardMedia, Rating, Stack } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';



function DishMenu(){
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
        <section>
            {/* sorting */}
            <div className="flex justify-between items-center p-2">
                <Stack direction={'row'} spacing={1} sx={{alignItems:"center"}}>
                    <DiningOutlinedIcon size='large' />
                    <Typography variant='h5' sx={{fontWeight:'bold'}}>DISHES:</Typography>
                </Stack>
                
                <Stack direction={'row'} spacing={2} sx={{alignItems:"center"}}>
                    <Typography variant='body1'>Sorting:</Typography>
                    <select className='p-2 bg-white rounded-lg'>
                        <option>
                            by name
                        </option>
                        <option>
                            by review
                        </option>
                        <option>
                            by date
                        </option>
                    </select>
                </Stack>
            </div>
            <Divider variant='middle'/>

            {/* dish card */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-2">
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

            {/* Pagination */}
            <Box sx={{display:'flex',justifyContent:'center',p:2}}>
                <Pagination
                    size="large"
                    count={10}
                    sx={{
                        '& .MuiPaginationItem-root.Mui-selected': {
                            backgroundColor: '#D4621A',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#b95316',
                            },
                        },
                        '& .MuiPaginationItem-root:hover': {
                            backgroundColor: '#f5dfd1',
                        },
                    }}
                />
            </Box>
        </section>

        </>
    )
}

export default DishMenu;