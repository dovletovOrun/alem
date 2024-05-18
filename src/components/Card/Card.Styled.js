import styled from "styled-components";
import { colors, flex } from "../../styles/vars";


export const CardStyles = styled.div`
    width: 275px;
    height: 100%;
    padding: 10px;
    margin: 20px;

    .brandImage{
        position: relative;
        padding: 10px;
    }

    .brandIconCol{
        ${flex.between}
    }
    .brandImageItem{
        width: 200px;
        height: 200px;
    }
    .brandName{
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
    }
    .brandDesc{
        font-size: 12px;
        line-height: 20px;
        color: ${colors.darkGrey};
    }
    .brandColor{
        font-size: 13px;
        color: #787878;
        line-height: 18px;
    }
    .brandPrice{
        font-size: 16px;
        line-height: 20px;
        color: ${colors.lightBlue};
    }
`

export const CardContainerStyled = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);


`