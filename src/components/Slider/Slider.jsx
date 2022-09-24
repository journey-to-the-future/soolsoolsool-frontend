import React, { Component } from "react";
import Slider from "react-slick";
// import ProductCard from "../Card/MainCard";
import SubCard from "../Card/SubCard";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Slider.css";


class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000210&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000211&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000669&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000707&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000056&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000843&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000158&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000147&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000241&targetNm=PRODUCT"
        },
        {
          img: "https://thesool.com/common/imageView.do?targetId=PR00000708&targetNm=PRODUCT"
        }
      ]
    };
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };

    return (
      <div className="container">
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <SubCard imgSrc={slide.img} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
