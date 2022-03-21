import React, { Component } from 'react'
import LoginPage from "./features/loginPage/Login"
import Homepage from './features/homePage/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';

import ListProduct from './features/listProductPage/listProduct';
import Productdetail from './features/productDetailPage/productDetail';
import AboutUs from './features/aboutUsPage/aboutUs';
import ContactUspage from './features/contactUsPage/contactUsPage';
import Register from './features/registerPage/register';
import FooterComponent from './components/footer/footerComponent';
import Cartpage from './features/cartPage/cartPage';
import AdminPage from './features/adminPage/adminPage';
import EditProfile from './features/editProfilePage/editProfile';
import OrderHistory from './features/orderHistoryPage/orderHistory';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from "react-redux";


function App() {
  const store = createStore(reducer)
  return (
    <main className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="*" element={<Homepage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/home" element={<Homepage />} />
            <Route exact path="/aboutUs" element={<AboutUs />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/contactUspage" element={<ContactUspage />} />
            <Route exact path="/cart" element={<Cartpage />} />
            <Route exact path="/admin" element={<AdminPage />} />
            <Route exact path="/products" element={<ListProduct />} />
            <Route exact path="/products/:id" element={<Productdetail />} />
            <Route exact path="/editProfile" element={<EditProfile />} />
            <Route exact path="/orderHistory" element={<OrderHistory />} />
            {/* <Route exact path="/home" element={<Homepage />} /> */}
            {/* <Route exact path="*" element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>} /> */}
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </Provider>
    </main>
  );
}

// function PrivateRoute({ children }) {
//   const isAuth = sessionStorage.getItem("token");
//   return isAuth ? children : <Navigate to="/login" />
// }

export default App;
