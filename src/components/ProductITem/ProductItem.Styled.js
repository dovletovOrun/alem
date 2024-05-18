import styled from "styled-components";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import { colors } from "../../styles/vars";

export const ProductItemStyles = styled.div`

  .swiper {
    height: 600px;
    width: 600px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .custom-pagination {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
    position: absolute;
    z-index: 10;
  }
  .sliderTopTitle {
    font-size: 27.89px;
    line-height: 38.4px;
  }
  .productItemMain {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .productDecsMain{
    margin-left: 20px;
  }
  .productDescTitle {
    font-size: 22.13px;
    font-weight: 700;
    line-height: 30px;
  }
  .productDescTitle2 {
    font-size: 33.33px;
    font-weight: 400;
    line-height: 45px;
    color: ${colors.darkGrey};
  }

  .productDescPrice {
    font-size: 16.73px;
    font-weight: 400;
    line-height: 27px;
    color: ${colors.lightBlue};
  }
  .productDescSizeTitle {
    font-size: 14.5px;
    font-weight: 700;
    line-height: 24px;
    color: ${colors.darkGrey};
  }
  .productDescSize {
   
    span{
        font-size: 12.25px;
    padding: 10px 20px;
    font-weight: 600;
    line-height: 21px;
    color: #9b9b9b;
    }
  }
`;

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
`;
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
`;
