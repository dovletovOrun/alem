import PropTypes from "prop-types";
import { CircleImageStyles } from "./CircleImage.Styled";
import { ContainerMain } from "../../styles/Container";

const CircleBrands = ({title}) => {
  return (
    <ContainerMain>
    <CircleImageStyles>
      <ul>
        {title?.map((item) => (
          <li key={item.id}>
            <img className="circleImages" src={item.image} alt={item.group_code} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </CircleImageStyles>
  </ContainerMain>
  )
}
CircleBrands.propTypes = {
    title: PropTypes.array,
  };

export default CircleBrands