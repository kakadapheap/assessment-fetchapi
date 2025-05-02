
import Products from "./pages/Products";
import { Route, Routes } from "react-router";
import Productsid from "./pages/Productsid";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/productsid" element={<Productsid />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
} 
export default App;
