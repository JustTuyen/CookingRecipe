import Navbar from "../components/navbar";
import Footer from '../components/Footer'
import MostSave from '../components/MostSave'
//
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

//
import { Box, Typography, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';



function NotFound(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen w-full flex justify-center pb-4">
            <div className="w-full md:w-4/5">
                <section className="flex flex-col items-center py-8">
                    <Box elevation={3} sx={{border: '2px solid #D4621A', borderRadius:'16px', p:4, width:700}}>
                        <Box sx={{p:2, display:'flex', justifyContent:'center'}}>
                            <HighlightOffIcon sx={{height:50, width: 50}} color="error"/>
                        </Box>
                        <Typography variant="h5" sx={{textAlign:'center'}}>
                            There seem to be an error on our server side!
                        </Typography>
                    </Box>

                </section>
                
                {/* display most save dish */}
                <MostSave/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default NotFound;