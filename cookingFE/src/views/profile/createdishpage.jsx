import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
//

//create dish function will be in another page, reason: aint no way I will add more 2000+ line to profilePage.
function CreateDish(){
    return(
        <>
        <Navbar/>
            <div className="min-h-screen w-full flex justify-center bg-[#F3F4F4]">
                <div className="w-full md:w-4/5 flex flex-col gap-2">


                </div>
            </div>
        <Footer/>
        </>
    )
}

export default CreateDish;