import { useParams } from "react-router-dom";
import { getAllGoodsApi } from "../../Services/GetGoods";
import { ProductItemStyles } from "./ProductItem.Styled";
import ProductItemSlider from "./ProductItemSlider";
import Header from "../Header/Header";
const ProductItem = () => {
  const { id } = useParams();
  const { data: productItem } = getAllGoodsApi.useGetSingleProductDataQuery(id);
  console.log(productItem);

  return (
    <>
    <Header/>
    <ProductItemStyles>
      <div className="productItemMain">
        <div className="productImageMain">
            <ProductItemSlider images={productItem?.product?.product_images}/>
        </div>
        <div className="">
          <div className="productDescTitle">
            {productItem?.product.spe_code6}
          </div>
          <div className="productDescTitle2">
            {productItem?.product.mat_name_lang1}
          </div>
          <div className="productDescPrice">
            {productItem?.product.product_price} TMT
          </div>
          <div className="productDescSizeTitle">
            Ölçegler
          </div>
          <div className="productDescSize">
            {productItem?.productSizes.map((size) => (
              <span key={size.material_id}>{size.spe_code4}</span>
            ))}
          </div>
        </div>
      </div>
    </ProductItemStyles>
    </>
  );
};

export default ProductItem;
