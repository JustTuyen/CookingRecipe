//
import Navbar from "../components/navbar";
//import Banner from '../components/Banner'
import Footer from "../components/Footer";
import MostSave from "../components/MostSave";
import SimilarDish from '../components/SimilarDish'

function Home(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen w-full flex justify-center">
            <div className="w-full md:w-4/5 flex flex-col gap-2
            bg-amber-200">
                {/* <Banner/> */}

                <p>Home</p>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                </textarea>
                <MostSave/>
                <SimilarDish />
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home;