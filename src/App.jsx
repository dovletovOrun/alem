import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"))
const FilterPage = lazy(() => import("./pages/FilterPage"))
const ProductItem = lazy(() => import("./components/ProductITem/ProductItem"))
function App() {
  return (
    <Suspense>

    <Routes>
          <Route index element={<Home />} path="/" />
          <Route element={<FilterPage />} path="/filter" />
          <Route element={<ProductItem />} path="/product/:id" />
          
        </Routes>
    </Suspense>
      
  );
}

export default App;
