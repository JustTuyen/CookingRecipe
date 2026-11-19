import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
//
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
//
import { Stack, Typography,TextField, Box, Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';



//create dish function will be in another page, reason: aint no way I will add more 2000+ line to profilePage.
function CreateDish(){
    return(
        <>
        <Navbar/>
            <div className="min-h-screen w-full flex justify-center bg-[#FFFF]">
                <div className="w-full md:w-4/5 flex flex-col gap-2">

                    {/* instructions and stuff */}
                    <section className="flex justify-center p-8">
                        <Box
                            sx={{ 
                                p:4,
                                width:'80%',
                                borderRadius: '16px',
                                position: 'relative',
                                border: "4px solid #D4621A"

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
                                    }}>
                                    <DesignServicesOutlinedIcon fontSize="large" />
                                </Avatar>
                                
                                {/* instructions */}
                                <Stack direction={'column'} spacing={1}>
                                    <Typography variant="h4" sx={{fontWeight:'bold'}} align="center">
                                        Guid to how write your recipes!
                                    </Typography>
                                    <Typography variant="caption" align="center" sx={{color:'text.secondary'}}>
                                        Click on step instruction if you want to jump to that section!
                                    </Typography>
                                </Stack>

                                <Divider variant="middle"/>
                                {/* Hypothetical step */}
                                <Stack direction={'column'} spacing={2} sx={{py:2}}>
                                    {/* #1 */}
                                    <Stack direction={'row'} spacing={1} sx={{alignItems:'center', py:2}}>
                                        <Avatar sx={{bgcolor:'#D4621A', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}} 
                                        variant="square">
                                            1
                                        </Avatar>
                                        <Link variant="h6" gutterBottom underline="hover" sx={{color:'black'}}>
                                            Add general info like serving and dish.
                                        </Link>
                                    </Stack>


                                </Stack>
                                <Divider variant="middle"/>
                                <Stack direction={'column'} spacing={1} sx={{alignItems:'start', py:2}}>
                                    <Typography variant="body2" sx={{color:'text.secondary', textWrap:'pretty'}}>
                                        *Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                                    </Typography>
                                    <Typography variant="body2" sx={{color:'text.secondary', textWrap:'pretty'}}>
                                        ** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.
                                    </Typography>
                                    <Typography variant="body2" sx={{color:'text.secondary', textWrap:'pretty'}}>
                                        (-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.
                                    </Typography>
                                    <Typography variant="body2" sx={{color:'text.secondary', textWrap:'pretty'}}>
                                        (-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.
                                    </Typography>
                                </Stack>
                        </Box>
                        <Divider/>
                    </section>

                    <section className="bg-[#FEF3E2] py-4">

                        {/* name and desctiption */}
                        <Box sx={{p:2, pb:4}}>
                            {/* box's title */}
                            <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                                <DnsOutlinedIcon fontSize="large" color="warning"/>
                                <Typography variant="h4" sx={{fontWeight:'bold'}}>
                                    Name & Descriptions:
                                </Typography>
                            </Stack>
                            <Divider sx={{mb:2}}/>
                            <Stack spacing={4} direction={'column'}>
                                {/* name */}
                                <Stack direction={'column'} spacing={1}>
                                    <Typography variant="h6" gutterBottom>Enter Dish's name:</Typography>
                                    <input 
                                    className="p-4 bg-white"
                                    type="text" placeholder="enter a name you want for your dish!"/>
                                </Stack>
                                {/* description */}
                                <Stack direction={'column'} spacing={1}>
                                    <Typography variant="h6" gutterBottom>Enter Dish's Description:</Typography>
                                    <textarea 
                                    className="p-4 bg-white"
                                    type="text" placeholder="enter a name you want for your description!"/>
                                </Stack>

                                {/* category - subcategory - childcategory - grandchildcategory*/}
                                <div className="grid grid-cols-2 gap-4">

                                    {/* category */}
                                    <Stack>
                                        <Typography variant="h6" gutterBottom>Pick a category:</Typography>
                                        <select className="bg-white p-4">
                                            <option>
                                                Category #1
                                            </option>
                                        </select>
                                    </Stack>

                                    {/* subcategory */}
                                    <Stack>
                                        <Typography variant="h6" gutterBottom>Pick a category:</Typography>
                                        <select className="bg-white p-4">
                                            <option>
                                                Category #1
                                            </option>
                                        </select>
                                    </Stack>

                                    {/* childsubcategory */}
                                    <Stack>
                                        <Typography variant="h6" gutterBottom><span className="italic">(*If)</span> Pick a category:</Typography>
                                        <select className="bg-white p-4">
                                            <option>
                                                Category #1
                                            </option>
                                        </select>
                                    </Stack>

                                    {/* grandchildcategory */}
                                    <Stack>
                                        <Typography variant="h6" gutterBottom><span className="italic">(*If)</span> Pick a category:</Typography>
                                        <select className="bg-white p-4">
                                            <option>
                                                Category #1
                                            </option>
                                        </select>
                                    </Stack>
                                </div>

                                {/* author */}
                                <Stack direction={'column'} spacing={1}>
                                    <Typography variant="h6" gutterBottom>Enter Dish's Author:</Typography>
                                    <input 
                                    className="p-4 bg-white"
                                    type="text" placeholder="enter a name you want for your dish!"/>
                                </Stack>


                            </Stack>
                        </Box>

                        {/* indegrient */}
                        <Box sx={{p:2, pb:4}}>
                            <Stack direction={'row'} spacing={1} sx={{alignItems:'center'}}>
                                <CategoryOutlinedIcon fontSize="large" color="warning"/>
                                <Typography variant="h4" sx={{fontWeight:'bold'}}>
                                    Add Indegriention:
                                </Typography>
                            </Stack>
                            <Divider sx={{mb:2}}/>
                            <Stack spacing={2}>
                                <Stack direction={'column'} spacing={1}>
                                    <Typography variant="h6" gutterBottom>Pick an Dish's name:</Typography>
                                    <input 
                                    className="p-4 bg-white"
                                    type="text" placeholder="enter a name you want for your dish!"/>
                                </Stack>
                                <Stack direction={'column'} spacing={1}>
                                    <Typography variant="h6" gutterBottom>Enter Dish's Description:</Typography>
                                    <textarea 
                                    className="p-4 bg-white"
                                    type="text" placeholder="enter a name you want for your description!"/>
                                </Stack>
                            </Stack>
                        </Box>

                    </section>

                </div>
            </div>
        <Footer/>
        </>
    )
}

export default CreateDish;