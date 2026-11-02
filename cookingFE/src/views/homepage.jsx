//
import Navbar from "../components/navbar";


function Home(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen w-full flex justify-center">
            <div className="w-full md:w-4/5 flex flex-col gap-2
            bg-amber-200">
                <p>Home</p>
            </div>
        </div>
        </>
    )
}

export default Home;