import React from 'react';
import Slider from "react-slick";
import Icon from './Icon.js';


export default class Carousel extends React.Component {

    goToNext(){
        this.slick.slickNext();
    }

    goToPrev(){
        this.slick.slickPrev();
    }

    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: false
        };
        return (
            <div class="carousel">
                <Slider ref={slick => (this.slick = slick)} {...settings}>
                    {React.Children.map(this.props.children, (child, i) => {
                        return <div>{child}</div>;
                    })}
                </Slider>
                <span class="prev" onClick={this.goToPrev.bind(this)} ><Icon>chevron_left</Icon></span>
                <span class="next" onClick={this.goToNext.bind(this)} ><Icon>chevron_right</Icon></span>
            </div>
        );
    }
}