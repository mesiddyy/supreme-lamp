
import "../Styles/Home.scss";
import BannerCarousel from "./BannerCarousel";
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = () => {
    return (
        <div className="frontpage-banner">
            <BannerCarousel />
        </div>
    );
};

export default Simple;

// export default Home;
