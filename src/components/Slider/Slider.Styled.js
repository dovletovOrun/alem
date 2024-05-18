import styled from "styled-components";
import arrowLeft from "../../assets/icons/arrow-left.png"
import arrowRight from "../../assets/icons/arrow-right.png"
import { colors } from "../../styles/vars";
export const SliderStyles = styled.div`
margin-top: 30px;
  position: relative;
  .swiper {
    height: 100%;
    width: 100%;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .custom-pagination{
    display: flex;
    justify-content: center;
    margin: 10px 0px;
  }
  .sliderTopTitle{
    font-size: 27.89px;
    line-height: 38.4px;
    color: ${colors.darkGrey};
  }

`

export const NextBtn = styled.div`
background-image: url(${arrowRight});
  width: 29px;
  height: 30px;
  background-size: cover;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-100%);
  z-index: 10;
`
export const PrevBtn = styled.div`
background-image: url(${arrowLeft});
  width: 29px;
  height: 30px;
  background-size: cover;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-100%);
  z-index: 10;
`