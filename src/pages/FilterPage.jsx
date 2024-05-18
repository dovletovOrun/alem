import { useState } from "react";
import { getAllGoodsApi } from "../Services/GetGoods";
import CardContainer from "../components/Card/CardContainer";
import { FilterStyles } from "../components/Filters/Filters.Styled";
import {
  FilterPageStyles,
  PaginationContainer,
} from "../components/Filters/FilterPage.Styled";
import { ContainerMain } from "../styles/Container";
import Header from "../components/Header/Header";
import { data } from "../constants";


const FilterPage = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    query: "",
    from_price: "",
    to_price: "",
    brands: "",
    gender: "",
    ages: "",
    colors: "",
    sizes: "",
  });
  const { data: products } = getAllGoodsApi.useGetAllProductsDataQuery({
    page,
    query: filters.query,
    sizes: filters.sizes,
    brands: filters.brands,
    gender: filters.gender,
    ages: filters.ages,
    colors: filters.colors,
    to_price: filters.to_price,
    from_price: filters.from_price,
  });

  const handleNextPage = () => {
    if (products?.meta.next_page_url) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (products?.meta.prev_page_url) {
      setPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };
  const handleResetData = () => {
    setFilters({
      query: "",
      from_price: "",
      to_price: "",
      brands: "",
      gender: "",
      ages: "",
      colors: "",
      sizes: "",
    });
  };

  const handleFilterSelect = (key, value) => {
    console.log(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  console.log(filters);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <Header />
      <FilterPageStyles>
        <ContainerMain>
          <div className="filterPagesCol">
            <FilterStyles>
              <div className="accordion-element">
                <button onClick={handleResetData}>Filteri Boshat</button>
                {data.map((item, i) => (
                  <div className="accordion-item" key={item.id}>
                    <div
                      onClick={() => toggle(i)}
                      className="accordion-title-item"
                    >
                      <h2>{item.title}</h2>
                      <span>{selected === i ? "-" : "+"}</span>
                    </div>
                    <div
                      className={
                        selected === i
                          ? "accordion-content show"
                          : "accordion-content"
                      }
                    >
                      {Object.keys(item).map((key) => {
                        if (
                          key !== "title" &&
                          key !== "id" &&
                          Array.isArray(item[key])
                        ) {
                          return (
                            <div key={key}>
                              {item[key].map((subItem) => (
                                <div
                                  key={subItem.id}
                                  onClick={() =>
                                    handleFilterSelect(key, subItem.value)
                                  }
                                >
                                  {subItem.value}
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </FilterStyles>
            <CardContainer goods={products?.data} />
          </div>
          <PaginationContainer>
            <button
              onClick={handlePrevPage}
              disabled={!products?.meta.prev_page_url}
            >
              Yza
            </button>
            <div className="page-info">
              Sahypa {products?.meta.current_page} /{" "}
              {Math.ceil(products?.meta.total / products?.meta.per_page)}
            </div>
            <button
              onClick={handleNextPage}
              disabled={!products?.meta.next_page_url}
            >
              Öňe
            </button>
          </PaginationContainer>
        </ContainerMain>
      </FilterPageStyles>
    </>
  );
};

export default FilterPage;


