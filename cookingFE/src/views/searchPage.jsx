
import Dish from '../assets/dish01.webp'

//
import Footer from "../components/Footer";

import Navbar from "../components/navbar";
//
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';

//
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Card, CardMedia, Rating } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';

//

function Search(){
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
        <Navbar/>
        <div className="min-h-screen w-full flex justify-center">
            <div className="w-full md:w-4/5 flex flex-col gap-2
            ">
                <Box sx={{p:2, width:'100%'}}>
                    <Stack direction={'row'} spacing={1} sx={{alignItems:'center', borderBottom:'1px solid black'}}>
                        <ManageSearchOutlinedIcon fontSize="large" sx={{color:'#D4621A'}}/>
                        <Typography variant="h5" sx={{fontWeight:'bold'}}>Search Results:</Typography>
                        <Typography variant="h6" sx={{fontStyle:'italic'}}>"Egg salad"</Typography>
                    </Stack>
                </Box>

                <section>
                    <Stack direction={'row'} spacing={2} sx={{alignItems:"center", justifyContent:'right', p:2}}>
                        <Typography variant='body1'>Sorting:</Typography>
                        <select className='p-2 bg-white rounded-lg border px-2'>
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
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Search;