import Dish from '../../assets/dish01.webp'

//
import StarIcon from '@mui/icons-material/Star';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TurnRightIcon from '@mui/icons-material/TurnRight';

//
import { Stack, Typography,Box, 
    Button, Divider, Rating,
    Card,CardContent,CardMedia, 
    CardActions} from "@mui/material";
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';

//
function MyDish(){
    const value = 3.5;

    return(
        <>
        <Box>
            {/* sorting  */}
            <Stack direction={'row'} spacing={1} sx={{alignItems:'center', justifyContent:'end',py:2}}>
                <Typography variant='body1'>Sorting:</Typography>
                <select className='border px-2 rounded-md'>
                    <option>
                        By Date
                    </option>
                    <option>
                        By Review
                    </option>
                    <option>
                        By Status
                    </option>
                </select>
            </Stack>

            {/* cards */}
            <Stack spacing={1} sx={{pb:4}} direction={'column'}>
                <Card sx={{ display: 'flex', height:'140px', p:1 }} elevation={3}>
                    <CardMedia
                        component="img"
                        sx={{ width: 175, borderRadius:'8px' }}
                        image={Dish}
                        alt="Live from space album cover"
                    />
                    <CardContent  sx={{ width: 550}}> 
                        <Stack direction={'column'} spacing={1}>

                            {/* dish name */}
                            <Typography variant="h6" 
                            sx={{
                                fontWeight: 'bold',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}> 
                                Crispy Beef and Bean Burritos with Jalapeno Cilantro Sour Cream Sauce
                            </Typography>

                            {/* review stats & public date */}
                            <Stack direction={'row'} spacing={1}>
                                <Box sx={{ width: 'auto', display: 'flex', alignItems: 'center' }}>
                                    <Rating
                                        size='small'
                                        value={value}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    <Typography variant='caption' sx={{ml:1,color: 'text.secondary'}}> ({value})</Typography>
                                </Box>
            
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Typography
                                    variant="caption"
                                    sx={{ color: 'text.secondary' }}
                                >
                                    12/12/2025
                                </Typography>
                            </Stack>

                            {/* status */}
                            <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                                <Typography
                                    variant="caption"
                                    sx={{ color: 'text.secondary' }}
                                >
                                    Status:
                                </Typography>

                                {/* chip handler */}
                                <Chip label="Posted" color='success'/>
                            </Stack>
                        </Stack>
                    </CardContent>
                    {/* actions section */}
                    <CardActions>
                        <Stack direction={'column'} spacing={1}>
                            <Button variant='outlined' size='small' color='primary' endIcon={<TurnRightIcon/>}>Link</Button>
                            <Button variant='outlined' size='small' color='error' endIcon={<DeleteOutlinedIcon/>}>Delete</Button>
                        </Stack>
                    </CardActions>
                
                </Card>

            </Stack>

            <Box sx={{display:'flex', justifyContent:'center', p:2}}>
                <Pagination size='small' count={10} color='warning'/>
            </Box>
        </Box>
        </>
    )
}

export default MyDish;