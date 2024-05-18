import { ContainerMain } from "../../styles/Container";
import { SportyStaticStyles } from "./StortyStatix.Styled";
import per20 from "../../assets/img/20per.png";
import per30 from "../../assets/img/30per.png";
import per40 from "../../assets/img/40per.png";
import per50 from "../../assets/img/50per.png";
import per60 from "../../assets/img/60per.png";
import gridItem1 from "../../assets/img/card1.png";
import gridItem2 from "../../assets/img/card2.png";
import gridItem3 from "../../assets/img/card3.png";
import gridItem4 from "../../assets/img/card4.png";
const SportyStatic = () => {
  return (
    <SportyStaticStyles>
      <ContainerMain>
        <div className="sportyTitle">Sporty Steals</div>
        <div className="sportyDiscountCol">
          <img src={per20} alt="" />
          <img src={per30} alt="" />
          <img src={per40} alt="" />
          <img src={per50} alt="" />
          <img src={per60} alt="" />
        </div>
        <div className="sportyGrid">
          <div>
            <img src={gridItem1} alt="" />
          </div>
          <div>
            <img src={gridItem2} alt="" />
          </div>
          <div>
            <img src={gridItem3} alt="" />
          </div>
          <div>
            <img src={gridItem4} alt="" />
          </div>
        </div>
      </ContainerMain>
    </SportyStaticStyles>
  );
};

export default SportyStatic;
