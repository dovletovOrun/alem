import styled from "styled-components";
import { colors, flex } from "../../styles/vars";

export const NavbarStyles = styled.div`
margin-top: 10px;

.narbarCol{
  ${flex.between}
}
.navbarListCol{
  ${flex.flex}
}

.navbarListMain{
  margin-left: 20px;
}

.nav-link {
  color: black;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.lightGrey};
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: ${colors.lightYellow};
  }
}

.nav-link.active {
  color: ${colors.lightYellow};
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 10px;
}
.navSingleDataCol{
  margin-top: 30px;
  display: flex;
  cursor: pointer;
  li{
    color: ${colors.lightGrey};
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover{
      color: ${colors.lightYellow};
    }
  }
  li:first-child{
    margin-right: 30px;
  }
}
.navbarIconsMain{
  ${flex.flex}
  span{
    margin: 0px 10px;
  }
}
`