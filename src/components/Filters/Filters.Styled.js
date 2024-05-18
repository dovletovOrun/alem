import styled from "styled-components";
import { colors } from "../../styles/vars";

export const FilterStyles = styled.div`
  .accordion-element {
    width: 300px;

    .accordion-item:not(:first-child) {
      margin-top: -25px;
    }
    .accordion-item {
        border-bottom: 1px solid #0000004a;
      padding: 16px;

      .accordion-title-item {
        margin-top: 10px;
        padding: 16px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        line-height: 24px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        
      }
      .accordion-title-item span {
        font-size: 2rem;
      }
      .accordion-content {
        overflow: hidden;
        max-height: 0px;
        transition: all 0.5s cubic-bezier(0, 1, 0, 1);
        font-size: 1rem;
        line-height: 24px;
        color: #000;
        max-width: 200px;
        cursor: pointer;
       
      }

      .accordion-content.show {
        height: auto;
        max-height: 9999px;
        transition: all 0.5s cubic-bezier(1, 0, 1, 0);
       
      }
    }
  }
  button{

    margin: 0 5px;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
  }
`;
