import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Layout from './page/Layout';
import Products from './page/Products';
import Cart from './page/Cart';
import NotFound from './page/NotFound.jsx';
import WishList from './page/WishList';
import Catgories from './page/Categories.jsx';
import Login from './page/Login';
import Register from './page/Register';
import Brands from './page/Brands.jsx';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./Context/AuthContext"
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./page/ProductDetails.jsx";
import CartContextProvider from './Context/CartContext';
import Payment from './page/Payment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForgetPassword from './page/ForgetPassword.jsx';
import VerifyCode from './compontents/VerifyCode.jsx';
import ResetPassowrd from './compontents/ResetPassowrd';

export default function App() {
  const x = new QueryClient()

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <CartContextProvider>
          <Layout />
        </CartContextProvider>,
      children: [
        { path: "home", element: <Home /> },
        { path: "brands", element: <Brands /> },
        { path: "products", element: <Products /> },
        { path: "cart", element: <Cart /> },
        { path: "wishlist", element: <WishList /> },
        { path: "catgories", element: <Catgories /> },
        { path: "login", element: <Login /> },
        { path: "verifycode", element: <VerifyCode /> },
        { path: "forgetpassword", element: <ForgetPassword /> },
        { path: "resetpassword", element: <ResetPassowrd /> },
        { path: "register", element: <Register /> },
        { path: 'products/:id', element: <ProductDetails /> },
        { path: 'payment', element: <Payment /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ]);

  return (
    <QueryClientProvider client={x}>
      <AuthContextProvider>
        <CartContextProvider>
          <Toaster />
          <RouterProvider router={router} />
        </CartContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};
