import { useState } from "react";
import { FilterStyles } from "./Filters.Styled";

const Filters = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const handleFilterClick = (key, value) => {
    console.log(value);
    onFilterSelect(key, value);
  };

  return (
    <FilterStyles>
      <div className="accordion-element">
        {data.map((item, i) => (
          <div className="accordion-item" key={item.id}>
            <div onClick={() => toggle(i)} className="accordion-title-item">
              <h2>{item.title}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div
              className={
                selected === i ? "accordion-content show" : "accordion-content"
              }
            >
              {Object.keys(item).map((key) => {
                if (key !== "title" && key !== "id") {
                  if (typeof item[key] === 'object') {
                    return (
                      <div
                        key={item[key].id}
                        onClick={() => handleFilterClick(key, item[key].value)}
                      >
                        {item[key].value}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={key}
                        onClick={() => handleFilterClick(key, item[key])}
                      >
                        {item[key]}
                      </div>
                    );
                  }
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </FilterStyles>
  );
};

export default Filters;

const data = [
  {
    id: 2,
    title: "Arzandan-Gymmada",
    item1: { id: 2, value: "0-100000" },
  },
  {
    id: 3,
    title: "Gymmatdan-Arzana",
    item1: { id: 3, value: "1000000-0" },
  },
  {
    id: 4,
    title: "Brandler",
    item1: { id: 4, value: "PUMA" },
    item2: { id: 5, value: "ADIDAS" },
  },
  {
    id: 5,
    title: "Gender",
    item1: { id: 6, value: "MAN" },
    item2: { id: 7, value: "WOMAN" },
  },
  {
    id: 6,
    title: "Ýaş aralyk",
    item1: { id: 8, value: "ADULT" },
    item2: { id: 18, value: "OLDER KIDS" },
  },
  {
    id: 7,
    title: "Renkler",
    item1: { id: 9, value: "TEAL" },
    item2: { id: 10, value: "MARLIN TEAL" },
    item3: { id: 123, value: "SHARK TEAL" },
    item4: { id: 124, value: "MID BLU" },
    item5: { id: 125, value: "LIME" },
    item6: { id: 126, value: "LIGHT GOLD" },
  },
  {
    id: 8,
    title: "Ölçegler",
    item1: { id: 11, value: "S" },
    item2: { id: 12, value: "8-10 YEARS" },
    item3: { id: 13, value: "10-12YEARS" },
    item4: { id: 174, value: "5-6 YEARS" },
  },
];
