
import banner01 from '../assets/banner01.jpg'

import SlickModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = SlickModule.default ?? SlickModule;

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

function Banner(){
    
    const settings = {
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return(
        <>
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={banner01} className='banner-items' alt="place holder banner 01" />
                </div>
                <div>
                    <img src={banner01} className='banner-items'  alt="place holder banner 02" />
                </div>
                <div>
                    <img src={banner01} className='banner-items'  alt="place holder banner 01" />
                </div>
                <div>
                    <img src={banner01} className='banner-items'  alt="place holder banner 02" />
                </div>                
            </Slider>
        </div>
        </>
    )
}

export default Banner;