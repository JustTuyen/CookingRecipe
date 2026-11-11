
import Dish from '../assets/dish01.webp'

//
import './css/navbar.css'
//
import SlickModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = SlickModule.default ?? SlickModule;

//
import Box from '@mui/material/Box';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{
            ...style,
            width: "20px",
            height: "20px",
            background: "#D4621A",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 2
        }}
        onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{
            ...style,
            width: "20px",
            height: "20px",
            background: "#D4621A",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 2
        }}
        onClick={onClick}
        />
    );
}


function DishGallery(){
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };


    return(
        <>
        <Box sx={{width:'90%', p:2}}>
            <iframe
               className="w-full md:w-[95%] h-[300px] md:h-[450px]"
                height="500"
                src="https://www.youtube.com/embed/6c28qWDMPBA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                    <div>
                       <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                    <div>
                        <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                    <div>
                        <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                    <div>
                        <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                    <div>
                        <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                    <div>
                        <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                    <div>
                        <img src={Dish} className='dish-items' alt="place holder" />
                    </div>
                </Slider>
            </div>
        </Box>
        </>
    )
}

export default DishGallery;