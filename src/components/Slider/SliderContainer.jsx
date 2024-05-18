import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper pagination styles
import PropTypes from "prop-types";
import { NextBtn, PrevBtn, SliderStyles } from "./Slider.Styled";
import { ContainerMain } from "../../styles/Container";

const SliderContainer = ({ images }) => {
  return (
    <ContainerMain>
      <SliderStyles>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ el: ".custom-pagination", clickable: true }}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={image.id}>
              <img src={image.image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
          <NextBtn className="custom-next" />
          <PrevBtn className="custom-prev" />
          <div className="custom-pagination"></div>
        </Swiper>
      </SliderStyles>
    </ContainerMain>
  );
};

SliderContainer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default SliderContainer;
