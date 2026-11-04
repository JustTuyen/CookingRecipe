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
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                </textarea>
            </div>
        </div>
        </>
    )
}

export default Home;