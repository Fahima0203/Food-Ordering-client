import React from 'react';
import './slideshow.css'


import img1 from '../asserts/images/home1.webp';
import img2 from '../asserts/images/home2.webp';
import img3 from '../asserts/images/home3.jpeg';
import img4 from '../asserts/images/home4.webp';
import img5 from '../asserts/images/home5.jpeg'
import img6 from '../asserts/images/home6.jpeg';
import img0 from '../asserts/images/chocolate-cake.jpeg';

const colors = [ img4, img3, img2, img1, img5, img6, img0]
const delay = 3000;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height: "450px" }}
            >
                {colors.map((home, index) => (
                    <img className="slide" src={home} key={index} alt="" />
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, ind) => (
                    <div
                        key={ind}
                        className={`slideshowDot${index === ind ? " active" : ""}`}
                        onClick={() => {
                            setIndex(ind);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default Slideshow;