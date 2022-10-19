import tech1 from "../assets/img/tech1.svg";
import tech2 from "../assets/img/tech2.svg";
import tech3 from "../assets/img/tech3.svg";
import tech4 from "../assets/img/tech4.svg";
import tech5 from "../assets/img/tech5.svg";
import tech6 from "../assets/img/tech6.svg";
import tech7 from "../assets/img/tech7.svg";
import Carousel from 'react-multi-carousel';

const Newsletter = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="technologies-bx wow zoomIn">
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme technologies-slider">
                                <div className="item">
                                    <img src={tech1} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={tech2} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={tech3} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={tech4} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={tech5} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={tech6} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={tech7} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter