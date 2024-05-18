import { useState } from "react";
import { getAllUgurlarApi } from "../../Services/GetUgurlar";
import { NavbarStyles } from "./Navbar.Styled";
import { Dropdown, Menu } from "antd";
import logo from "../../assets/img/logo.png";
import { ContainerMain } from "../../styles/Container";
import userIcon from "../../assets/icons/userIcon.png";
import likedIcon from "../../assets/icons/likedIcon.png";
import basketIcon from "../../assets/icons/basketIcon.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const { data } = getAllUgurlarApi.useGetAllUgurlarDataQuery();
  const { data: singleData } = getAllUgurlarApi.useGetAllUgurlarSingleDataQuery(
    selectedId,
    {
      skip: !selectedId,
    }
  );
  console.log(data);
  const handleClick = (id) => {
    setActiveLink(id);
    setSelectedId(id);
  };

  const renderDropdownMenu = (smallgroupcodes) => (
    <Menu style={{ width: 500, display: "flex", flexWrap: "wrap", height: 80 }}>
      {smallgroupcodes.map((item) => (
        <Menu.Item key={item.id}>
          * {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  const handleNavigate = () => {
    navigate("/filter")
  }
  const handleHomeNavigate = () => {
    navigate("/")
  }


  return (
    <NavbarStyles>
      <ContainerMain>
        <div className="narbarCol">
          <div className="navbarListCol">
          <div onClick={handleHomeNavigate} className="navbarLogo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="navbarListMain">
            <ul>
              {data?.data.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`nav-link ${
                      activeLink === item.id ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          </div>
          <div onClick={handleNavigate}>
            Filter Sahypa
          </div>
          <div className="navbarIconsMain">
            <span>Salam, Myhman</span>
            <span>
              <img src={userIcon} alt="" />
            </span>
            <span>
              <img src={likedIcon} alt="" />
            </span>
            <span>
              <img src={basketIcon} alt="" />
            </span>
          </div>
        </div>
        <ul className="navSingleDataCol">
          {singleData?.group_codes.map((items) => (
            <li key={items.firm_id}>
              <Dropdown
                overlay={
                  singleData && renderDropdownMenu(items.smallgroupcodes)
                }
                trigger={["hover"]}
              >
                <span>{items.group_code}</span>
              </Dropdown>
            </li>
          ))}
        </ul>
      </ContainerMain>
    </NavbarStyles>
  );
};

export default Navbar;
