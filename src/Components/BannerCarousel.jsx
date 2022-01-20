import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Responsive } from "./Common/Constants/Constants";
import { Images } from "./Common/Images/images";
import Skeleton from '@mui/material/Skeleton';

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
                    <img
                        draggable={false}
                        alt="text"
                        style={{ width: "100%", height: "100%" }}
                        src={image.image}
                    />
                );
            })}
        </Carousel>);
}
export default BannerCarousel;