
import "../Styles/Home.scss";
import BannerCarousel from "./BannerCarousel";
import Youtube from "./info";
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.

const Simple = () => {
    return (
        <div className="home-container">
            <div className="home-services">
                <div className="item">
                    Book
                </div>
                <div className="item">
                    View
                </div>
                <div className="item">
                    Help
                </div>
                <div className="item">
                    FAQ
                </div>
            </div>
            <div className="frontpage-banner">
                <BannerCarousel />
            </div>
            <div className="info-container">
                <Youtube />
            </div>
        </div>
    );
};

export default Simple;

// export default Home;
