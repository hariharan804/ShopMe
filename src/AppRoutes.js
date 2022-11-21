import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import { Login } from "./screens/login";
import { Layout } from "./components/layout";
import ViewProduct from "./screens/viewProduct";
import { MyCart } from "./screens/myCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Categoty from "./screens/category";
import Cookies from "universal-cookie";

export const AppRoutes = () => {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(false);
  const res = useSelector((state) => state.auth.value);

  useEffect(() => {
    console.log(res);
    setIsAuth();
    let cookie = cookies.get("auth");
    if (cookie === "true") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [res]);

  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          <Route path="/user" element={<Layout />}>
            <Route index path="home" element={<Home />} />
            <Route path="product/:id" element={<ViewProduct />} />
            <Route path="cart" element={<MyCart />} />
            <Route path="category/:category" element={<Categoty />} />
          </Route>
          <Route path="*" element={<Navigate to="/user/home" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRoutes;
