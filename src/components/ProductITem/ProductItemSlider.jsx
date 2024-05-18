import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper pagination styles
import PropTypes from "prop-types";
import { NextBtn, PrevBtn, ProductItemStyles } from "./ProductItem.Styled";

const ProductItemSlider = ({ images }) => {
  return (
    <ProductItemStyles>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ el: ".custom-pagination", clickable: true }}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {images?.map((imageObj, index) => (
    imageObj.src.map((src, idx) => (
        <SwiperSlide key={`${index}-${idx}`}>
            <img src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
    ))
))}
        <NextBtn className="custom-next" />
        <PrevBtn className="custom-prev" />
        <div className="custom-pagination"></div>
      </Swiper>
    </ProductItemStyles>
  );
};

export default ProductItemSlider;
