import { useState } from "react";
import { HeaderStyles } from "./Header.Styled";
import truckIcon from "../../assets/icons/iconTruck.png";
import cashIcon from "../../assets/icons/iconCash.png";
import Navbar from "../Navbar/Navbar";
import storeFinder from "../../assets/icons/storeFinder.png"

const languages = [
  { code: "TKM", name: "Türkmençe" },
  { code: "RU", name: "Русский" },
  { code: "EN", name: "English" },
];

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleChange = (event) => {
    const selectedCode = event.target.value;
    const selectedLang = languages.find((lang) => lang.code === selectedCode);
    setSelectedLanguage(selectedLang);
  };
  return (
    <HeaderStyles>
      <div className="headerTopMain">
        <ul>
          <li className="headerTopColOne">
            <div className="headerTopItemOne">
              <div>
                <img src={truckIcon} alt="truckIcon" />
              </div>
              <div>
                Türkmenistanyn Çäginde 5 welayatyň islendik Ýerine eltip berme
                hyzmaty
              </div>
            </div>
            <div className="headerTopItemTwo">
              <div>
                <img src={cashIcon} alt="cashIcon" />
              </div>
              <div>Eltip bermek üçin nagt</div>
            </div>
          </li>
          <li>
            <div className="headerTopSearch">
              <input
                type="text"
                placeholder="Näme gözleýärsiň?"
                className="inputSearch"
              />
            </div>
          </li>
          <li>
            <div className="headerTopLanguage">
              <select value={selectedLanguage.code} onChange={handleChange}>
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.code}
                  </option>
                ))}
              </select>
              <div className="headerSelectedLang">
                <p>{selectedLanguage.name}</p>
              </div>
              <div className="headerStoreFinder">
                <img src={storeFinder} alt="storeFinder" />
                <span>Dükan tapyjy</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Navbar />
    </HeaderStyles>
  );
};

export default Header;
