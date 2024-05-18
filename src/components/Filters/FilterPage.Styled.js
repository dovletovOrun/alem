import styled from "styled-components";


export const FilterPageStyles = styled.div`
.filterPagesCol{
    display: flex;
    
}
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  button {
    margin: 0 5px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }

  .page-info {
    margin: 0 10px;
    font-size: 16px;
  }
`;