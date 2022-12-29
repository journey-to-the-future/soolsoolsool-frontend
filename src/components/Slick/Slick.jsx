import React, { Component } from "react";
import { getExplore } from "../../api/axios";
import styled from 'styled-components';
import Slider from "react-slick";
import MainPost from "../Post/MainPost";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }`;

const Pre = styled.div`
  width: 3vw;
  height: 3vh;
  position: absolute;
  left: -3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 3vw;
  height: 3vh;
  position: absolute;
  right: -4.5%;
  z-index: 3;
`;

class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: []
    };
  }

  componentDidMount(){
    getExplore(1)
      .then((response) => {
         this.setState({
            slides: response.slice(0, 20)
          });
      })
    }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      prevArrow: (
        <Pre>
          <ArrowBackIosIcon 
            color="primary" 
            fontSize="large" 
            sx={{ "&:hover": { transform: "scale(1.2)", transitionDuration: "0.4s" } }}
          />
        </Pre>
      ),
      nextArrow: (
        <NextTo>
          <ArrowForwardIosIcon 
            color="primary" 
            fontSize="large"
            sx={{ "&:hover": { transform: "scale(1.2)", transitionDuration: "0.4s" } }}
          />
        </NextTo>
      ),
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
      <StyledSlider {...settings}>
        {this.state.slides.map((slide, index) => {
          return (
            <div key={index}>
              <MainPost img={slide.imageUrl} id={slide.itemId} price={slide.price} type={slide.soolType} name={slide.name} company={slide.company} />
            </div>
          );
        })}
      </StyledSlider>
    );
  }
}

export default ProductSlider;