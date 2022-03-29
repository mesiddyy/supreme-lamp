import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "../Styles/Tiles.scss";
import Sound from "react-sound"
const responsive = {
    largeDesktop: {
        breakpoint: { max: 4000, min: 1228 },
        items: 2,
        partialVisibilityGutter: 50
    },
    desktop: {
        breakpoint: { max: 1228, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 934 },
        items: 1,
    },
    wideMobile: {
        breakpoint: { max: 934, min: 658 },
        items: 2,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: { max: 658, min: 0 },
        items: 1,
        partialVisibilityGutter: 50
    },
};

const Tiles = () => {
    const [nikhilImages, setNikhilImages] = useState([]);
    useEffect(() => {
        let i = 1;
        let temp = []
        for (i = 1; i < 43; i++) {
            temp.push(
                require(`./smallImages/nikhil${i}.jpg`)
            )
        }
        setNikhilImages(temp);
    }, [])
    const handleClick = (imageName) => {
        const fileName = imageName.split("/")[3].split(".")[0];
    }
    return (
        <div className="carousel-container">
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                partialVisbile={true}
                // itemClass="carousel-item-padding-40-px"
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                keyBoardControl={true}
                autoPlaySpeed={2000}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                tabIndex={-1}
            >
                {nikhilImages.map((item, i) =>
                    <div className="banner-container" onClick={() => handleClick(item)} key={i}>
                        <img src={item} />
                    </div>
                )}
            </Carousel>

        </div>

    )
}

export default Tiles;