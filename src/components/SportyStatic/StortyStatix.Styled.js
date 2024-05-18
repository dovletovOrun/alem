import styled from "styled-components";
import { colors, flex } from "../../styles/vars";

export const SportyStaticStyles = styled.div`
  margin: 40px 0px;
  .sportyTitle {
    font-size: 27.89px;
    line-height: 38.4px;
    color: ${colors.darkGrey};
  }
  .sportyDiscountCol {
    ${flex.center}
    img{
        margin: 10px 2px;
    }
  }
  .sportyGrid {
    max-width: 1200px;
    margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr); 
  gap: 10px;
place-items: center;
}
`;
