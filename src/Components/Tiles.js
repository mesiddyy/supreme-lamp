import "../Styles/Tiles.scss";

const Tiles = () => {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector(".tiles__container").appendChild(document.querySelector(".tiles__wrapper").cloneNode(true));
        document.querySelectorAll(".tiles__wrapper").forEach(box =>
            box.classList.add("tiles__animation")
        );
    });
    return (
        <div className="tiles-blue">
            <div className="window tiles">
                <div className="tiles__container">
                    <div className="tiles__wrapper">
                        <div className="tiles__item">card 1</div>
                        <div className="tiles__item">card 2</div>
                        <div className="tiles__item">card 3</div>
                        <div className="tiles__item">card 4</div>
                        <div className="tiles__item">card 5</div>
                        <div className="tiles__item">card 6</div>
                        <div className="tiles__item">card 7</div>
                        <div className="tiles__item">card 8</div>
                        <div className="tiles__item">card 9</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiles;