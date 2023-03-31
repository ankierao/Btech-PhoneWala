import { Route, Routes } from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Contact from "./component/contact/Contact";
import Cart from "./component/cart/Cart";
import Shipping from "./component/cart/Shipping.jsx";
import ConfirmOrder from "./component/cart/ConfirmOrder.jsx";
import PaymentSucess from "./component/cart/PaymentSucess.jsx";
import Login from "./component/login/Login.jsx";
import Profile from "./component/profile/Profile.jsx";
import MyOrders from "./component/myorders/MyOrders.jsx";
import OrderDetails from "./component/myorders/OrderDetails.jsx";
import Dashboard from "./component/admin/Dashboard.jsx";
import Users from "./component/admin/Users.jsx";
import Orders from "./component/admin/Orders.jsx";
import About from "./component/about/About.jsx";
import NotFound from "./component/layout/NotFound.jsx";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/list.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSucess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/tables.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import "./styles/notfound.scss";



function App() {
  return (
  <Router>
  <Header isAuthenticated ={true}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/confirmorder" element={<ConfirmOrder/>}/>
      <Route path="/paymentsucess" element={<PaymentSucess/>}/>{" "}

      <Route path="/login" element={<Login/>}/>
      <Route path="/me" element={<Profile/>}/>
      <Route path="/myorders" element={<MyOrders/>}/>
      <Route path="/order/:id" element={<OrderDetails />}/>
      <Route path="/admin/dashboard" element={<Dashboard />}/>
      <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/about" element={<About/>} />

        <Route path="*" element={<NotFound/>} />

    </Routes>
    <Footer/>
  </Router>
  )
}

export default App;
