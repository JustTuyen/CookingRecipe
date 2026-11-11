import * as React from 'react';

import './css/review.css'

//
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import StarIcon from '@mui/icons-material/Star';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CheckIcon from '@mui/icons-material/Check';
//
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Button, Card, Rating, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

//

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

function Review(){
    const value = 3.5;
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return(
        <>
        <Box sx={{p:2, width:'100%'}}>
            <Stack direction={'column'} spacing={1}>
                <Typography variant="h4" sx={{fontWeight:'bold', color:'black'}}>
                    Reviews
                </Typography>
                <Typography variant='body1'> Check out our
                    <Link href="#" underline="always" sx={{px:1, color:'#D4621A'}}>
                        community guidelines
                    </Link>
                    about review
                </Typography>
            </Stack>

            <Box sx={{bgcolor:'#FEF3E2', w:'100%', p:2, my:2}}>
                <Paper elevation={3} sx={{p:2, w:'90%'}}>

                    {/* general review stats */}
                    <Stack direction={'column'} spacing={1} sx={{alignItems:'center', p:2}}>
                        <Typography variant="h6" sx={{fontWeight:'bold', color:'black'}}>
                            Mom’s Pineapple Lokshen Kugel
                        </Typography>
                        <Stack direction={'column'} spacing={1} sx={{textAlign:'center'}}>
                            <Rating
                                name="text-feedback"
                                value={value}
                                readOnly
                                size='large'
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                            <Typography variant='body2'>({labels[value]} out of 10)</Typography>
                        </Stack>
                        <Box sx={{width:'auto'}}>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center'}}> 
                                <Rating
                                size='small'
                                name="text-feedback"
                                defaultValue={5} 
                                readOnly/>
                                <progress
                                    value="32"
                                    max="100"
                                    className="custom-progress"
                                />
                                <Typography variant="body2" sx={{color:'black'}}>
                                    7
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center'}}> 
                                <Rating
                                size='small'
                                name="text-feedback"
                                defaultValue={4} 
                                readOnly/>
                                <progress
                                    value="0"
                                    max="100"
                                    className="custom-progress"
                                />
                                <Typography variant="body2" sx={{color:'black'}}>
                                    0
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center'}}> 
                                <Rating
                                size='small'
                                name="text-feedback"
                                defaultValue={3} 
                                readOnly/>
                                <progress
                                    value="0"
                                    max="100"
                                    className="custom-progress"
                                />
                                <Typography variant="body2" sx={{color:'black'}}>
                                    0
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center'}}> 
                                <Rating
                                size='small'
                                name="text-feedback"
                                defaultValue={2} 
                                readOnly/>
                                <progress
                                    value="0"
                                    max="100"
                                    className="custom-progress"
                                />
                                <Typography variant="body2" sx={{color:'black'}}>
                                    0
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center'}}> 
                                <Rating
                                size='small'
                                name="text-feedback"
                                defaultValue={1} 
                                readOnly/>
                                <progress
                                    value="0"
                                    max="100"
                                    className="custom-progress"
                                />
                                <Typography variant="body2" sx={{color:'black'}}>
                                    0
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center'}}> 
                                <Rating
                                size='small'
                                name="text-feedback"
                                defaultValue={0} 
                                readOnly/>
                                <progress
                                    value="0"
                                    max="100"
                                    className="custom-progress"
                                />
                                <Typography variant="body2" sx={{color:'black'}}>
                                    0
                                </Typography>
                            </Stack>
                          


                        </Box>

                    </Stack>
                    <Divider variant='middle'/>

                    {/* write ur review form */}
                    <Stack direction={'column'} spacing={1} sx={{p:2}}>
                        <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                            <RateReviewOutlinedIcon fontSize='medium'/>
                            <Typography variant="h6" sx={{fontWeight:'bold', color:'black'}}>
                                Write a review
                            </Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                            <Typography variant='body1'  sx={{fontWeight:'bold'}}>Rating:</Typography>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant='body1' sx={{fontWeight:'bold'}}>My Review:</Typography>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Minimum 3 rows"
                                style={{ width: '100%', border:'1px solid #D4621A', borderRadius:'8px',padding: '8px' }}
                            />
                        </Stack>

                    </Stack>
                </Paper>
            </Box>

            <Divider/>
            <Box sx={{w:'100%', p:2, my:2}}>
                <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                    <FilterListOutlinedIcon/>
                    <select>
                        <option selected>By Date</option>
                        <option>By Rating</option>
                    </select>       
                </Stack>
                <Stack direction={'column'} spacing={3} sx={{my:2}}>
                    
                    <Card elevation={3}>
                        <Stack direction={'row'} spacing={2} sx={{p:1,alignItems:'center'}} >
                            <Avatar sx={{ bgcolor: '#D4621A' }} aria-label="recipe">
                                <PersonOutlinedIcon/>
                            </Avatar>
                            <Typography variant='body1' sx={{fontWeight:'bold'}}>
                                HappyNori5030
                            </Typography>
                            <Chip size='large' color="warning" icon={<LocalDiningIcon color='warning' />} 
                            label="chef" variant="outlined" 
                            sx={{color:'#D4621A'}}/>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} spacing={2} sx={{p:2,alignItems:'center'}}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/>
                            <Typography variant='body2' sx={{color:'#808080'}}>
                                HappyNori5030
                            </Typography>
                        </Stack>
                        <Box sx={{px:2, pb:4}}>
                            <Typography variant='body2' gutterBottom sx={{textWrap:'pretty', color:"#2A1A0E"}}>
                                My own family recipe for Lokshen Kugel, offers to substitute plumped golden raisons for the pineapple, deletes the sugar and flour, adds 1 can of sweetened evaporated milk and a sprinkle of sweet paprika for coloring on the top. It was delicious!. I would also consider other fruit: rehydrated cranberries in addition to the raisons. As I did not try the recipe as stated, I will give it only 4 stars-- it probably is delicious, but I didn't try it exactly the stated way. But why the flour??
                            </Typography>
                        </Box>
                        
                        


                    </Card>

                    <Card elevation={3}>
                        <Stack direction={'row'} spacing={2} sx={{p:1,alignItems:'center'}} >
                            <Avatar sx={{ bgcolor: '#D4621A' }} aria-label="recipe">
                                <PersonOutlinedIcon/>
                            </Avatar>
                            <Typography variant='body1' sx={{fontWeight:'bold'}}>
                                HappyNori5030
                            </Typography>
                            <Chip size='large' color="warning" icon={<CheckIcon color='warning' />} 
                            label="critic" variant="outlined" 
                            sx={{color:'#D4621A'}}/>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} spacing={2} sx={{p:2,alignItems:'center'}}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/>
                            <Typography variant='body2' sx={{color:'#808080'}}>
                                HappyNori5030
                            </Typography>
                        </Stack>
                        <Box sx={{px:2, pb:4}}>
                            <Typography variant='body2' gutterBottom sx={{textWrap:'pretty', color:"#2A1A0E"}}>
                                My own family recipe for Lokshen Kugel, offers to substitute plumped golden raisons for the pineapple, deletes the sugar and flour, adds 1 can of sweetened evaporated milk and a sprinkle of sweet paprika for coloring on the top. It was delicious!. I would also consider other fruit: rehydrated cranberries in addition to the raisons. As I did not try the recipe as stated, I will give it only 4 stars-- it probably is delicious, but I didn't try it exactly the stated way. But why the flour??
                            </Typography>
                        </Box>
                    </Card>

                </Stack>
                <Box sx={{display:'flex', justifyContent:'center', p:4}}>
                    <Button variant='outlined' size='large' sx={{border:'2px solid #D4621A', color:'#D4621A'}}>
                        View more reviews
                    </Button>
                </Box>
            </Box>

        </Box>
        </>
    )
}

export default Review;