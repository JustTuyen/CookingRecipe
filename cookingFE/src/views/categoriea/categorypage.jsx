import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";


//
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';


//
import { Box, Grid, Stack, Typography, Button} from "@mui/material";




function Category(){
    return(
        <>
        <Navbar/>
            <div className="min-h-screen w-full flex justify-center">
                <div className="w-full md:w-4/5 flex flex-col gap-2">
                    <Box sx={{p:2, width:'100%', borderBottom:'1px solid black'}}>
                        <Stack direction={'row'} spacing={1} sx={{alignItems:'center', py:2}}>
                            <ManageSearchOutlinedIcon fontSize="large" sx={{color:'#D4621A'}}/>
                            <Typography variant="h5" sx={{fontWeight:'bold'}}>Recipes from A to z:</Typography>
                        </Stack>
                        <Stack spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: 'wrap', justifyContent:'center' }}>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>A</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>B</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>C</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>D</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>E</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>F</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>G</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>H</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>I</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>J</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>K</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>L</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>M</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>N</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>O</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>P</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>Q</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>S</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>T</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>U</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>V</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>W</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>X</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>Y</Button>
                            <Button variant="outlined" color='warning' sx={{fontWeight:'bold'}}>Z</Button>
                        </Stack>
                    </Box>
                    <section>
                        {/* sorting through letter A */}
                        <Stack direction={'column'} spacing={2} sx={{my:2}}>
                            <Box sx={{display:'flex', justifyContent:'center', 
                                bgcolor:'#2A1A0E', width:'5%', borderRadius:'16px',p:2}}>
                                <Typography variant='h5' sx={{color:'white'}}>A</Typography>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid size={3}>
                                    <Typography variant='h6' sx={{py:2, borderTop:'1px solid black',
                                        '&:hover': {
                                            cursor:'pointer',
                                            fontWeight: 'bold',
                                        },
                                    }}
                                    >Antipasti</Typography>
                                </Grid>
                            </Grid>
                        </Stack>

                        {/* sorting through letter B */}
                        <Stack direction={'column'} spacing={2} sx={{my:2}}>
                            <Box sx={{display:'flex', justifyContent:'center', 
                                bgcolor:'#2A1A0E', width:'5%', borderRadius:'16px',p:2}}>
                                <Typography variant='h5' sx={{color:'white'}}>B</Typography>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid size={3}>
                                    <Typography variant='h6' sx={{py:2, borderTop:'1px solid black',
                                        '&:hover': {
                                            cursor:'pointer',
                                            fontWeight: 'bold',
                                        },
                                    }}
                                    >Antipasti</Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                        
                    </section>
                </div>
            </div>
        <Footer/>
        </>
    )

}

export default Category;