
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
//
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Rating, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';




//

function DishDetail(){

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
            <div className="w-full md:w-4/5 flex flex-col gap-2 ">
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
                        <Box sx={{width:'80%'}}>
                            <Typography variant='body2' gutterBottom sx={{textWrap:'pretty'}}>
                                Chef John's scaled-down technique produces tender short ribs with a kiss of sherry wine, a touch of tomato, and fragrant herbs— the perfect flavor profile for beef short ribs. "I insist that you serve them over mashed potatoes; they are incredibly delicious."
                            </Typography>
                        </Box>
                       
                        {/* actions */}
                        <Box sx={{width:'80%'}}>
                            <Stack direction={'row'} spacing={1}>
                                {/* save */}
                                <Button variant="contained" 
                                sx={{backgroundColor:'#D4621A', color:'white'}}
                                endIcon={<FavoriteIcon />}>
                                    Save
                                </Button>

                                {/* review */}
                                <Button variant="contained" 
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
                                endIcon={<StarBorderOutlinedIcon />}>
                                    Share
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>
                    
                    {/* image gallary */}
                    <DishGallery/>

               </section>
            </div>
        </div>

        </>
    )
}

export default DishDetail;