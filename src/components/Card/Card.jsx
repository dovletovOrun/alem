import DiscountSign from "../../UI/DiscountSign/DiscountSign";
import { CardStyles } from "./Card.Styled";
import likedIcon from "../../assets/icons/likedIcon.png";
import SaleSign from "../../UI/Sale/SaleSign";
import noImage from "../../assets/img/noImage.png"
import { useNavigate } from "react-router-dom";
const Card = ({ goods }) => {
  const navigate = useNavigate()
  const renderImage = () => {
    if (goods.images && goods.images.length > 0) {
      return <img className="brandImageItem" src={goods.images[0]} alt={goods.product.mat_name_lang1} />;
    } else {
      return <img className="brandImageItem" src={noImage} alt="No Image Available" />;
    }
  };
  const handleProductItemNavigate = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <CardStyles>
      <div onClick={() => handleProductItemNavigate(goods?.product?.material_id)} className="brandImage">
        
        <div className="brandIconCol">
          <div>
            <DiscountSign discount={28} />
          </div>
          <div className="brandLikedIcon">
            <img src={likedIcon} alt="likedIcon" />
          </div>
        </div>
        {renderImage()}
        <SaleSign text={"Sale"}/>
      </div>
      <div className="brandName">{goods.product.spe_code6}</div>
      <div className="brandDesc">{goods.product.mat_name_lang1}</div>
      <div className="brandColor">{goods.product.spe_code5} renk</div>
      <div className="brandPrice">{goods.product.product_price}TMT</div>
    </CardStyles>
  );
};

export default Card;
