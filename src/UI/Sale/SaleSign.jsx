import styled from 'styled-components'
import { colors } from '../../styles/vars'
import PropTypes from "prop-types"

const SaleSign = ({text}) => {
  return (
    <SaleSignStyles>{text}</SaleSignStyles>
  )
}

SaleSign.propTypes = {
    text: PropTypes.string
}
export default SaleSign

const SaleSignStyles = styled.div`
    width: 50px;
    height: 20px;
    border-radius: 4px;
    color: #1BAF4E;
    background-color: ${colors.white};

`