import circleImage from "../../assets/img/CircleImg.png";
import PropTypes from "prop-types";
import { CircleImageStyles } from "./CircleImage.Styled";
import { ContainerMain } from "../../styles/Container";

const CircleImage = ({ title }) => {
  return (
    <ContainerMain>
      <CircleImageStyles>
        <ul>
          {title?.map((item) => (
            <li key={item.group_code_id}>
              <img src={circleImage} alt={item.group_code} />
              <span>{item.group_code}</span>
            </li>
          ))}
        </ul>
      </CircleImageStyles>
    </ContainerMain>
  );
};

CircleImage.propTypes = {
  title: PropTypes.array,
};

export default CircleImage;
