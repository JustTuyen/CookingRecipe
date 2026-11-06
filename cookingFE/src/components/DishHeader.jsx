
import dish from '../assets/dish01.webp'

//
import StarIcon from '@mui/icons-material/Star';
import FlatwareOutlinedIcon from '@mui/icons-material/FlatwareOutlined';
//
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating, Box, Stack } from '@mui/material';

//
function DishHeader(){
    
    
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
        <div className="flex flex-col gap-2 w-full py-4 bg-[#FEF3E2] rounded-lg">
            {/* header title */}
            <Divider variant="middle">
                <Typography gutterBottom variant="h4" 
                sx={{fontWeight:'bold', color:'#D4621A'}}
                component="div">
                    Chicken Dinner Winners
                </Typography>
            </Divider>

            {/* content */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* header card */}
                <div className="col-span-2 p-2">
                    <Card sx={{width:'100%',backgroundColor:'transparent', boxShadow:'none'}}>
                        <CardMedia
                            sx={{ height: 450, 
                                borderRadius:'16px',
                                border: '2px solid #D4621A'
                            }}
                            image={dish}
                            title="header-dish"
                        />
                        <CardContent>
                            <Stack direction={'row'} spacing={1} 
                            sx={{alignItems:'center'}}>
                                <FlatwareOutlinedIcon sx={{color:'#D4621A'}}/>
                                <Typography gutterBottom sx={{fontWeight:'bold', color:'#D4621A'}}
                                variant="h6" component="div">
                                    Dinner
                                </Typography>
                            </Stack>
                            <Typography gutterBottom variant="h4" 
                            sx={{fontWeight:'bold'}}
                            component="div">
                                Quesabirria Tacos
                            </Typography>
                            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
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
                    </Card>
                </div>

                {/* small card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 p-2 gap-2 w-full">
                    {/* max 4 cards */}
                    <Card sx={{
                        backgroundColor:'transparent', boxShadow:'none'
                    }}>
                        <Stack spacing={2} direction={'row'} sx={{alignItems:'start'}}>
                            <CardMedia
                            sx={{
                                height: 120,
                                width: 130,
                                objectFit: 'cover',
                                flexShrink: 0,
                                borderRadius:'16px',
                                border: '2px solid #D4621A',
                            }}
                            image={dish}
                            title="card-dish"
                            />
                            <Typography gutterBottom variant="body1" 
                                sx={{fontWeight:'bold'}}
                                component="div">
                                Baked Caesar Chicken
                            </Typography>
                        </Stack>
                    </Card>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default DishHeader;