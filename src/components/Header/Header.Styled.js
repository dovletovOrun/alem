import styled from "styled-components";
import { colors, flex } from "../../styles/vars";
import searchIcon from "../../assets/icons/iconSearch.png";

export const HeaderStyles = styled.header`
  .headerTopMain {
    padding: 10px 20px 5px 20px;
    background-color: ${colors.darkGrey};
    ul {
      ${flex.between}
    }
    .headerTopColOne {
      ${flex.flex}
    }
    .headerTopItemOne,
    .headerTopItemTwo {
      ${flex.flex}
      color: ${colors.white};
      font-size: 13px;
      div:first-child {
        margin-right: 7px;
      }
    }
    .headerTopItemTwo {
      margin-left: 10px;
    }
    .headerTopSearch {
      min-width: 400px;
      .inputSearch {
        width: 100%;
        padding: 10px 30px;
        border-radius: 5px;
        background-color: #f1f5f7;
        background-image: url(${searchIcon});
        background-repeat: no-repeat;
        background-position: 10px;
      }
    }
    .headerTopLanguage, .headerStoreFinder {
      ${flex.flex}
      color: ${colors.white};
    }
    select {
        cursor: pointer;
      background-color: transparent;
      color: ${colors.white};
      -webkit-appearance: none;
      appearance: none;
      width: 50px;
      option {
        background-color: #000;
        padding: 5px;
        color: #fff;
        text-align: center;
      }
    }
    .headerSelectedLang {
      padding: 0px 10px;
      border-left: 1px solid #9B9B9B;
      border-right: 1px solid #9B9B9B;
    }
    .headerStoreFinder{
        margin-left: 10px;
        img{
            margin-right: 10px;
        }
    }
  }
`;
