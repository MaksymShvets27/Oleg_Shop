import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CategoryPage } from "./pages/Category/Category";
import { SearchPage } from "./pages/Search/SearchPage";
import { AdminPage } from "./pages/Admin/Admin";
import { MainPage } from "./pages/Main/Home";
import { CashListPage } from "./pages/CashList/CashList";
import { CheckoutPage } from "./pages/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="cashList" element={<CashListPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
