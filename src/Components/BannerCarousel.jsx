import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Responsive } from "./Common/Constants/Constants";
import { Images } from "./Common/Images/images";

const BannerCarousel = () => {
    return (
        <Carousel
            ssr
            partialVisbile
            autoPlay
            infinite
            itemClass="image-item"
            responsive={Responsive}
            arrows={true}
        >
            {Images.map(image => {
                return (
                    <div>
                        <img
                            draggable={false}
                            alt="text"
                            style={{ width: "100%", height: "100%" }}
                            src={image.image}
                        />
                        <span
                            style={{
                                position: "absolute",
                                zIndex: 5,
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textShadow: "2px 2px #ffffff"
                            }}
                        >
                            {image.text}
                        </span>
                    </div>
                );
            })}
        </Carousel>);
}
export default BannerCarousel;