// import React from 'react';
import carouselImgOne from '../../img/carousel/carousel_1.jpg';
import { SearchForm } from '../Search/Search';
import { Banner728x90 } from '../Banners/Banner728x90/Banner728x90';



// const Carousel = () => {


//     return (
        
    // <div className="slideshow-container">

    //     <div className = "mySlides fade">
    //         <img src = { carouselImgOne }/>
    //         <div className = "text">Explore beauties of Montenegro - Bay of Kotor</div>
    //         <SearchForm />
    //         <Banner728x90 />
    //     </div>

    // </div>
//     )
// }

// export {Carousel};


import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';


const Wrapper = styled.div`
    width: 100%;
    height: 778px;
    position: relative;
`;

const Page = styled.div`
    width: 100%;
    position: relative;
`;

export default class Carousel extends React.Component {
    render() {
        return(
            <Wrapper>
                <Slider 
                    speed = {500}
                    slidesToShow = {1}
                    slidesToScroll = {1}
                    infinite = {false}
                    dots = {true}
                    arrows = {true}
                >
                <Page><img className = "slider-image" src = {carouselImgOne} alt = "image" />
                <div className="slideshow-container">

                    <div className = "mySlides fade">
                        <h1 className = "text">Explore beauties of Montenegro - Bay of Kotor</h1>
                        <SearchForm />
                        <Banner728x90 />
                    </div>

                    </div>
                </Page>
                <Page><img className = "slider-image" src = {carouselImgOne} alt = "image" /></Page>
                <Page><img className = "slider-image" src = {carouselImgOne} alt = "image" /></Page>

                </Slider>
            </Wrapper>
        );
    }
}