import styled from 'styled-components'
import { colors } from '../../styles/vars'
import PropTypes from "prop-types"

const DiscountSign = ({discount}) => {
  return (
    <DiscountSignStyles>
        -{discount}%
    </DiscountSignStyles>
  )
}

DiscountSign.propTypes = {
    discount: PropTypes.number
}
export default DiscountSign


const DiscountSignStyles = styled.div`
    width: 50px;
    height: 30px;
    border-radius: 100px;
    color: #fff;
    text-align: center;
    padding-top: 9px;
    font-size: 11px;
    background-color: ${colors.lightBlue};

`