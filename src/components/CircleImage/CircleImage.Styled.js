import styled from "styled-components";
import { flex } from "../../styles/vars";


export const CircleImageStyles = styled.div`
margin: 30px 0px 50px 0px;
ul{
    ${flex.between}
    flex-wrap: wrap;
    li{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
}
.circleImages{
    width: 170px;
    height: 170px;
    border-radius: 100px;
}


`