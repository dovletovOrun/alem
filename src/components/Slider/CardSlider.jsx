import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper pagination styles
import PropTypes from "prop-types";
import { NextBtn, PrevBtn, SliderStyles } from "./Slider.Styled";
import { ContainerMain } from "../../styles/Container";
import Card from "../Card/Card";

const CardSlider = ({items}) => {
  return (

    <ContainerMain>
      <SliderStyles>
        <div className="sliderTopTitle">Best Sellers</div>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          pagination={{ el: ".custom-pagination", clickable: true }}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {items?.map((item) => (
            <SwiperSlide key={item.product.material_id}>
              <Card goods={item}/>
            </SwiperSlide>
          ))}
          <NextBtn className="custom-next" />
          <PrevBtn className="custom-prev" />
          <div className="custom-pagination"></div>
        </Swiper>
      </SliderStyles>
    </ContainerMain>
  )
}

CardSlider.propTypes = {
    items: PropTypes.array
  };

export default CardSlider