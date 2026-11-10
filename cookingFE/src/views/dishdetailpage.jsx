import * as React from 'react';
//
import Dish from '../assets/dish01.webp'
//
import Navbar from "../components/navbar";
import DishGallery from "../components/DishGallary";

//
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Avatar from '@mui/material/Avatar';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';

//
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Rating, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
//

function DishDetail(){
    const [openNutrient, setOpenNutrient] = React.useState(false);

    const handleNutrient = () => {
        setOpenNutrient(!openNutrient);
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            ingredients
        </Link>,
        <Typography  key="2" sx={{ color: 'black', fontSize:'18px',fontWeight: 'bold' }}>
            chicken
        </Typography>
    ];

    const value = 3.5;

    return(
        <>
        <Navbar/>
        <div className="min-h-screen w-full flex justify-center">
            <div className="w-full md:w-4/5 flex flex-col gap-2 py-4">
               <section className="flex flex-col items-start gap-2 p-2">
                    
                    {/* general info */}
                    <Stack direction={'column'} spacing={2}>
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

                        {/* name */}
                        <Typography variant='h4' gutterBottom sx={{fontWeight:'bold'}}>
                            Loaf Pan Short Ribs for 2
                        </Typography>

                        {/* author and public date */}
                        <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                            <CoPresentIcon fontSize="medium" sx={{color:'#D4621A'}}/>
                            <Typography variant='body2' gutterBottom>
                                By John Mitzewich
                            </Typography>
                            <RemoveIcon fontSize="small"/>
                            <Typography variant='body2' gutterBottom>
                                Published on April 15, 2026
                            </Typography>
                        </Stack>

                         {/* review sta */}
                        <Stack spacing={2} direction={'row'} sx={{alignItems:'center'}}>
                            <Box sx={{ width: 'auto', display: 'flex', alignItems: 'center' }}>
                                <Rating
                                    name="text-feedback"
                                    value={value}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                <Box sx={{ ml: 2 }}>({value})</Box>
                            </Box>
                            <Divider orientation="vertical" variant="middle" flexItem />

                            {/* the amount if review */}
                            <Typography variant='body2' gutterBottom sx={{fontWeight:'bold'}}>
                                4 reviews
                            </Typography>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            {/* the amount of image in gallery */}        
                            <Typography variant='body2' gutterBottom sx={{fontWeight:'bold'}}>
                                4 photo
                            </Typography>
                        </Stack>

                        {/* description */}
                        <Box sx={{
                            width: {
                                xs: '100%',  
                                sm: '80%',  
                            },
                            py:2
                        }}>
                            <Typography variant='body2' gutterBottom sx={{textWrap:'pretty'}}>
                                Chef John's scaled-down technique produces tender short ribs with a kiss of sherry wine, a touch of tomato, and fragrant herbs— the perfect flavor profile for beef short ribs. "I insist that you serve them over mashed potatoes; they are incredibly delicious."
                            </Typography>
                        </Box>
                       
                        {/* actions */}
                        <Box sx={{
                            width: {
                                xs: '100%',  
                                sm: '80%',  
                            },
                        }}>
                            <Stack direction={'row'} spacing={1}>
                                {/* save */}
                                <Button variant="contained"
                                sx={{backgroundColor:'#D4621A', color:'white'}}
                                endIcon={<FavoriteIcon />}>
                                    Save
                                </Button>

                                {/* review */}
                                <Button variant="contained"  size='medium'
                                sx={{
                                    backgroundColor: '#F4AE52',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: '#D4621A',
                                        color: 'white',
                                    },
                                }}
                                endIcon={<StarBorderOutlinedIcon />}>
                                    Review
                                </Button>

                                {/* print */}
                                <Button variant="contained" 
                                sx={{
                                    backgroundColor: '#F4AE52',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: '#D4621A',
                                        color: 'white',
                                    },
                                }}
                                endIcon={<PrintOutlinedIcon />}>
                                    Print out
                                </Button>

                                {/* share */}
                                <Button variant="contained" 
                                sx={{
                                    backgroundColor: '#F4AE52',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: '#D4621A',
                                        color: 'white',
                                    },
                                }}
                                endIcon={<ShareOutlinedIcon />}>
                                    Share
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>
                    
                    {/* image gallary */}
                    <DishGallery/>

                    {/* timer and serving fact */}
                    <Box 
                    sx={{width: {
                        xs: '100%',  
                        sm: '65%',  
                    }, border:'1px solid #F4AE52', borderRadius:"16px", p:2}}>
                        
                        {/* timer */}
                        <Divider textAlign="left">
                            <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                                <AvTimerIcon sx={{color:'#D4621A'}}/>
                                <Typography variant="h6" sx={{color:'#D4621A'}}>TIMER</Typography>
                            </Stack>
                        </Divider>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>Cooking time:</Typography>
                                <Typography variant="body1">15 min</Typography>
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>prep time:</Typography>
                                <Typography variant="body1">20 min</Typography>
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>total time:</Typography>
                                <Typography variant="body1">35 min</Typography>
                            </Stack>

                        </div>

                        {/* servicing */}
                        <Divider textAlign="left">
                            <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                                <RiceBowlIcon sx={{color:'#D4621A'}}/>
                                <Typography variant="h6" sx={{color:'#D4621A'}}>SERVING</Typography>
                            </Stack>
                        </Divider>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>Servings:</Typography>
                                <Typography variant="body1">12</Typography>
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>Yield:</Typography>
                                <Typography variant="body1">10</Typography>
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>Difficulty:</Typography>
                                <Typography variant="body1">5</Typography>
                            </Stack>

                        </div>

                        {/* jump to Nutrition */}
                        <Divider/>
                        <Box sx={{display:'flex',justifyContent:"center", p:2}}>
                            <Button variant="text" size="large" 
                            sx={{color:"#D4621A", fontWeight:"bold"}}
                            endIcon={<SwipeDownIcon/>}>
                                Jump to Nutrition Facts
                            </Button>
                        </Box>
                    </Box> 

                    {/* Ingredients */}
                    <Box sx={{
                        width: {
                            xs: '100%',  
                            sm: '80%',  
                        }, p:2
                    }}>   
                        <Stack spacing={1}>
                            <FormGroup>
                                <FormControlLabel control={<Switch color="warning" defaultChecked />} label="Keep Screen Awake?" />
                            </FormGroup>
                            <Typography variant="h4" sx={{fontWeight:'bold', color:'black'}}>
                                Ingredients:
                            </Typography>
                        </Stack>
                        <Box sx={{py:2}}>
                            <Stack spacing={1} direction={'row'} sx={{alignItems:'center'}}>
                                <ArrowRightIcon/>
                                <Typography variant="body1">
                                    quality
                                </Typography>
                                <Typography variant="body1">
                                    Name
                                </Typography>
                                <Typography variant="body1">
                                    unit
                                </Typography>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Typography variant="body1" sx={{color:'#C5C1C1'}}>
                                    (note)
                                </Typography>
                            </Stack>
                        </Box>
                        
                    </Box>       

                    {/* Directions */}        
                    <Box sx={{
                            width: {
                                xs: '100%',  
                                sm: '80%',  
                            },p:2
                        }}>
                        <Typography variant="h4" sx={{fontWeight:'bold', color:'black'}}>
                            Directions:
                        </Typography>
                        
                        <Box sx={{py:2}}>
                            <Stack spacing={1}>
                                <Typography variant="h6" sx={{fontWeight:'bold', color:'black'}}>
                                    Step 1
                                </Typography>
                                <Typography variant='body2' gutterBottom sx={{textWrap:'pretty'}}>
                                    Chef John's scaled-down technique produces tender short ribs with a kiss of sherry wine, a touch of tomato, and fragrant herbs— the perfect flavor profile for beef short ribs. "I insist that you serve them over mashed potatoes; they are incredibly delicious."
                                </Typography>
                                <img src={Dish} 
                                height={300} width={'80%'}
                                alt='category image'/>
                            </Stack>
                        </Box>

                       <Box
                        sx={{
                            backgroundColor: "#FEF3E2",
                            p: 2,
                            my: 4,
                            borderRadius: '16px',
                            position: 'relative',
                            border: "2px solid #D4621A"
                        }}
                    >
                            <Avatar
                                sx={{
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    bgcolor: '#D4621A',
                                    width: 56,
                                    height: 56,
                                    position: 'absolute',
                                    top: '-28px'
                                }}
                            >
                                <NewReleasesOutlinedIcon fontSize="large" />
                            </Avatar>

                            <Box sx={{ textAlign: 'center', py:2}}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
                                    Chef's Note
                                </Typography>

                                <Typography variant='body1' gutterBottom sx={{ textWrap: 'pretty', color: "black" }}>
                                    If you want to use all butter, or all oil, for browning the chicken, feel free. You can also use any kind of potato you prefer.
                                </Typography>
                            </Box>
                        </Box>

                    </Box>

                    {/* Nutrition Facts */}
                    <Box 
                    sx={{
                        width: {
                            xs: '100%',  
                            sm: '80%',  
                        },p:2,
                    }}>
                        <Typography variant="h4" sx={{fontWeight:'bold', color:'black',my:2}}>
                            Nutrition Facts:
                        </Typography>

                        {/* general stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>112</Typography>
                                <Typography variant="body1">Calories</Typography>
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>112</Typography>
                                <Typography variant="body1">Fat</Typography>
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>112</Typography>
                                <Typography variant="body1">Carbs</Typography>
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant="body1" sx={{color:'#2A1A0E', fontWeight:'bold'}}>112</Typography>
                                <Typography variant="body1">Protein</Typography>
                            </Stack>

                        </div>

                        <Box
                            sx={{ width: '100%', bgcolor: 'background.paper', py:2}}>
                            <Button onClick={handleNutrient} size='large' sx={{color:'#D4621A', fontWeight:"bold"}}> 
                                Show Full Nutrition Label
                                {openNutrient ? <ExpandLess /> : <ExpandMore />}
                            </Button>
                            <Collapse in={openNutrient} timeout="auto" unmountOnExit>
                                {/* full stats */}
                                <Box sx={{border:'1px solid black',p:2, borderRadius:'16px'}}>
                                    <Stack direction={'column'} spacing={1}>
                                        <Typography variant='h5' sx={{fontWeight:'bold'}}>Nutrition Facts</Typography>
                                        <Typography variant='body1'>Servings Per Recipe 6</Typography>
                                        <Typography variant='body1'>Calories: 263</Typography>
                                    </Stack>
                                    <Divider textAlign='right'>
                                        <Typography variant='h6' sx={{fontWeight:'bold'}}>% Daily Value *</Typography>
                                    </Divider>
                                    <Stack spacing={2} direction={'column'} sx={{py:2}}>
                                        <div className="flex justify-between">
                                            <Stack direction={'row'} spacing={1}>
                                                <Typography variant='body1' sx={{fontWeight:'bold'}}>Total Carbohydrate:</Typography>
                                                <Typography variant='body1'>29g</Typography>
                                            </Stack>
                                            <Typography variant='body1'>10%</Typography>
                                        </div>
                                    </Stack>
                                    <Divider variant='middle'/>
                                    {/* notes */}
                                    <Stack direction={'column'} spacing={2} sx={{py:2}}>
                                        <Typography variant='body2' gutterBottom sx={{textWrap:'pretty', color:"#C5C1C1"}}>
                                            * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                                        </Typography>
                                        <Typography variant='body2' gutterBottom sx={{textWrap:'pretty', color:"#C5C1C1"}}>
                                            ** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.                                        </Typography>
                                        <Typography variant='body2' gutterBottom sx={{textWrap:'pretty', color:"#C5C1C1"}}>
                                            (-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.
                                        </Typography>
                                        <Typography variant='body2' gutterBottom sx={{textWrap:'pretty', color:"#C5C1C1"}}>
                                            ** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.

                                        </Typography>
                                        <Typography variant='body2' gutterBottom sx={{textWrap:'pretty', color:"#C5C1C1"}}>
                                            (-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.                                        
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Collapse>
                        </Box>
                        
                    </Box>
               </section>
               <section>
                    <Box  
                    sx={{
                        backgroundColor:'#D4621A',
                        width: {
                            xs: '100%',  
                            sm: '80%',  
                        },
                        p:8,
                        borderRadius: '16px',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        textAlign:'center',color:'white'
                    }}
                    >
                        <Typography variant='h5' sx={{fontWeight:"bold"}} color='inherit'>Did you make this recipe? ^^</Typography>
                        <Button variant='outlined' size='large' color='inherit' sx={{px:4}}>
                            Yes, I made it!
                        </Button>
                    </Box>
               </section>
            </div>
        </div>

        </>
    )
}

export default DishDetail;