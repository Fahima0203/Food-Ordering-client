import { Component } from 'react'
import React from 'react';
import Navbar from '../Components/Navbar.jsx'
import './Home.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import Slideshow from './SlideShow.jsx';
class Home extends Component {
    // constructor() {
    //     super()

    //     this.onClickForward = this.onClickForward.bind(this)
    //     this.onClickBack = this.onClickBack.bind(this)

    //     // const img1 = require('../asserts/images/home12.jpeg');
    //     // const img1 = require('../asserts/images/home9.jpeg');
    //     const img2 = require('../asserts/images/home4.webp');
    //     const img3 = require('../asserts/images/home6.webp');
    //     const img4 = require('../asserts/images/home5.webp');
    //     const img5 = require('../asserts/images/home7.jpeg');
    //     // const img6 = require('../asserts/images/home10.webp');

    //     this.state = {
    //         index: 0,
    //         imgList: [img1, img2, img3, img4, img5]
    //     }
    // }

    // onClickForward() {
    //     if (this.state.index + 1 === this.state.imgList.length) {
    //         this.setState({
    //             index: 0
    //         })
    //     }
    //     else {
    //         this.setState({
    //             index: this.state.index + 1
    //         })
    //     }
    // }

    // onClickBack() {
    //     if (this.state.index - 1 === -1) {
    //         this.setState({
    //             index: this.state.imgList.length - 1
    //         })
    //     }
    //     else {
    //         this.setState({
    //             index: this.state.index - 1
    //         })
    //     }
    // }

    render() {
        return (
            <>
                <Navbar />
                <div >
                    <hr></hr>
                    {/* <div>
                        <button style={{ padding: "5px 10px", borderRadius: "50%", margin: "5px" }} onClick={this.onClickBack}> <ArrowBackIcon /> </button>
                        <img style={{ height: "500px", width: "90%", borderRadius: "5%" }} src={this.state.imgList[this.state.index]} alt="" />
                        <button style={{ padding: "5px 10px", borderRadius: "50%", margin: "5px" }} onClick={this.onClickForward}> <ArrowForwardIcon /> </button>
                    </div> */}
                    <Slideshow />
                    <hr></hr>
                </div>
                <br />

                <div className='homepage'>
                    <h1>ABOUT</h1>
                    <p>This study aims to systematically review the extant literature on online food delivery.
                        The literature on online food delivery is synthesised in terms of theories, contexts, methods adopted and analytical techniques used.
                        The literature review suggests that online food delivery research has transitioned from website-based food delivery to online to offline, mobile application-based food delivery, and drone-based food delivery.
                        Further, based on the synthesis, we have developed a conceptual framework that shows the frequently reported antecedents, mediators, moderators, and consequences in online food delivery literature.
                        Moreover, by identifying overlooked areas of online food delivery research, some insightful future research directions have been proposed to further advance this research domain.
                        This review contributes to the hospitality literature, specifically to the food delivery literature.</p>
                </div>
                {/* <div>
                    <hr></hr>
                    <img id="img" src={"https://media.baamboozle.com/uploads/images/197596/1632655896_169363_gif-url.gif"} alt="gif" />
                    <hr></hr>
                </div> */}

            </>
        )
    }
}


export default Home;