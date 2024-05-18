import PropTypes from "prop-types"
import Card from "../../components/Card/Card";
import { CardContainerStyled } from "./Card.Styled";

const CardContainer = ({goods}) => {
  return (
    <CardContainerStyled>
        {
        goods?.map((goodsItem) => (
            <Card key={goodsItem.product.material_id} 
            goods={goodsItem}/>
        ))
      }
    </CardContainerStyled>
  )
}

CardContainer.propTypes = {
    goods: PropTypes.array
}

export default CardContainer